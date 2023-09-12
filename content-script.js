(() => {
  let youtubeLeftControls, youtubePlayer;
  let currentVideo = "";
  let currentVideoBookmarks = [];
  let paragraph, title;

  const fetchBookmarks = async () => {
    const obj = await chrome.storage.sync.get([currentVideo]);
    return obj[currentVideo] ? JSON.parse(obj[currentVideo]) : [];
  };

  const addNewBookmarkEventHandler = async () => {
    console.log("u clickd");
    const currentTime = youtubePlayer.currentTime;
    console.log("time= ", currentTime);
    const newBookmark = {
      time: currentTime,
      desc: "Bookmark at " + getTime(currentTime),
    };

    console.log("bookmark= ", newBookmark);

    currentVideoBookmarks = await fetchBookmarks();
    const bookmarkAlreadyExists = currentVideoBookmarks.find((bookmark) => bookmark.time === newBookmark.time);
    if (!bookmarkAlreadyExists) {
      window.open("./popup.html")
      chrome.storage.sync.set({
        [currentVideo]: JSON.stringify(
          [...currentVideoBookmarks, newBookmark].sort((a, b) => a.time - b.time)
        ),
      });
    }
    console.log(currentVideo);
  };

  const getSummary = async () => {
    console.log("j'ai cliqué");

    if (!paragraph) {
      const url =
        "https://youtube-summary-multilanguage.p.rapidapi.com/summarize/long/gpt-3.5-turbo";
      const description =
        document.getElementsByClassName("ytd-watch-metadata")[16];
      paragraph = document.createElement("p");
      title = document.createElement("h2");
      title.innerHTML = "Summary:";

      const options = {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key":
            "953d53dcfcmshb4c036c7d51b56ap15acbejsn396576a98967",
          "X-RapidAPI-Host": "youtube-summary-multilanguage.p.rapidapi.com",
        },
        body: JSON.stringify({
          url: window.location.href,
          lang: "fr",
        }),
      };

      try {
        const response = await fetch(url, options);
        console.log(response, options);
        const result = await response.text();
        const parseResult = JSON.parse(result);
        console.log(parseResult);
        console.log(parseResult.error);
          if(parseResult.error === "It's not possible to make a summary for this video because it doesn't have a transcript") {
            alert(parseResult.error);
          } else if (parseResult.error !== null) {
            alert("Something went wrong, please try again later !")
          }
          
          if(parseResult.summary) {
            paragraph.innerHTML = parseResult.summary.text.split("Summary:")[1]
          ? parseResult.summary.text.split("Summary:")[1]
          : parseResult.summary.text;
        description.append(title, paragraph);
        description.style.display = "block";
          }
        
      } catch (error) {
        console.log(error.message);
        console.error(error);
      }
    }
  };

  const newVideoLoaded = async () => {
  const inputExists = document.getElementsByClassName("bookmark-title")[0];
  if(!inputExists){
    const bookmarkInput = document.createElement("input");
    bookmarkInput.className = "bookmark-title";
  
  }
  


    const bookmarkBtnExists =
      document.getElementsByClassName("bookmark-btn")[0];

    currentVideoBookmarks = await fetchBookmarks();
    console.log(bookmarkBtnExists);
    if (!bookmarkBtnExists) {
      console.log("doesnt exist");
      const bookmarkBtn = document.createElement("img");
      bookmarkBtn.src = chrome.runtime.getURL("assets/pin.png");
      bookmarkBtn.className = "ytp-button " + "bookmark-btn";
      bookmarkBtn.title = "Click to bookmark current timestamp";

      youtubeLeftControls =
        document.getElementsByClassName("ytp-left-controls")[0];
      youtubePlayer = document.getElementsByClassName("video-stream")[0];
      console.log(youtubePlayer.currentTime);
      youtubeLeftControls.append(bookmarkBtn);

      bookmarkBtn.addEventListener("click", addNewBookmarkEventHandler);
    }
    console.log(bookmarkBtnExists, "create");
    if(!inputExists){
      const bookmarkInput = document.createElement("input");
      bookmarkInput.className = "ytd-searchbox " + "bookmark-title";
      bookmarkInput.type  = "text";
    youtubeLeftControls.append(bookmarkInput);

    }
    const summarizeBtnExists =
      document.getElementsByClassName("summarize-btn")[0];
    if (!summarizeBtnExists) {
      const summarizeBtn = document.createElement("button");
      summarizeBtn.className = "ytp-button " + "summarize-btn";
      summarizeBtn.innerText = "Summarize";

      youtubeLeftControls.append(summarizeBtn);
      summarizeBtn.style.width = "80px";
      summarizeBtn.style.borderRadius = "40px";
      summarizeBtn.style.height = "30px";
      summarizeBtn.style.backgroundColor = "white";
      summarizeBtn.style.color = "black";
      summarizeBtn.style.marginTop = "10px";
      summarizeBtn.style.fontWeight = "bold";
      summarizeBtn.style.fontSize = "12px";
      summarizeBtn.style.display = "flex";
      summarizeBtn.style.justifyContent = "center";
      summarizeBtn.style.alignItems = "center";

      summarizeBtn.addEventListener("click", getSummary);
    }
  };

  chrome.runtime.onMessage.addListener(async (obj, sender, response) => {
    const { type, value, videoId } = obj;
    console.log(1);
    if (type === "NEW") {
      currentVideo = videoId;
      newVideoLoaded();
    } else if (type === "PLAY") {
      youtubePlayer.currentTime = value;
    } else if (type === "DELETE") {
      currentVideoBookmarks = await fetchBookmarks();
      console.log(currentVideoBookmarks);
      currentVideoBookmarks = currentVideoBookmarks.filter(
        (b) => b.time != value
      );
      chrome.storage.sync.set({
        [currentVideo]: JSON.stringify(currentVideoBookmarks),
      });

      response(currentVideoBookmarks);
    }
  });

  let trail = "&ytExt=ON";
  if (
    !window.location.href.includes(trail) &&
    !window.location.href.includes("ab_channel") &&
    window.location.href.includes("youtube.com/watch")
  ) {
    const new_URL = window.href + trail;
    window.history.pushState({}, "", new_URL);
  }
})();

const getTime = (t) => {
  var date = new Date(0);
  date.setSeconds(t);

  return date.toISOString().substr(11, 8);
};
