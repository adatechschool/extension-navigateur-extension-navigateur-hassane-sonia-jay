(() => {
  let youtubeLeftControls, youtubePlayer;
  let currentVideo = "";
  let currentVideoBookmarks = [];

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
    console.log(currentVideo);
    chrome.storage.sync.set({
      [currentVideo]: JSON.stringify(
        [...currentVideoBookmarks, newBookmark].sort((a, b) => a.time - b.time)
      ),
    });
  };

  const newVideoLoaded = async () => {
    const bookmarkBtnExists =
      document.getElementsByClassName("bookmark-btn")[0];

    currentVideoBookmarks = await fetchBookmarks();
    console.log(bookmarkBtnExists);
    if (!bookmarkBtnExists) {
      console.log("doesnt exist");
      const bookmarkBtn = document.createElement("img");

      bookmarkBtn.src = chrome.runtime.getURL("assets/bookmark.png");
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
  };

  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type, value, videoId } = obj;

    if (type === "NEW") {
      currentVideo = videoId;
      newVideoLoaded();
    }
  });

  newVideoLoaded();
})();

const getTime = (t) => {
  var date = new Date(0);
  date.setSeconds(t);

  return date.toISOString().substr(11, 8);
};
