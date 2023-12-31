(() => {
  let youtubeLeftControls, youtubePlayer;
  let currentVideo = "";
  let currentVideoBookmarks = [];
  let paragraph, title;
  let lang = "fr";

  const fetchBookmarks = async () => {
    const obj = await chrome.storage.sync.get([currentVideo]);
    return obj[currentVideo] ? JSON.parse(obj[currentVideo]) : [];
  };

  const addNewBookmarkEventHandler = async () => {
    const currentTime = youtubePlayer.currentTime;
    const newBookmark = {
      time: currentTime,
      desc: "Bookmark at " + getTime(currentTime),
    };

    currentVideoBookmarks = await fetchBookmarks();
    // on vérifie si le bookmark existe déjà. S'il existe, il retoune le bookmark. S'il n'existe pas, ça retourne "undefined".
    const bookmarkAlreadyExists = currentVideoBookmarks.find(
      (bookmark) => bookmark.time === newBookmark.time
    );
    // si le bookmark n'existe pas, on le stocke dans le chrome.storage.
    if (!bookmarkAlreadyExists) {
      chrome.storage.sync.set({
        [currentVideo]: JSON.stringify(
          [...currentVideoBookmarks, newBookmark].sort(
            (a, b) => a.time - b.time
          )
        ),
      });
    }
  };

  const getSummary = async () => {
    const summarizeBtn = document.getElementsByClassName("summarize-btn")[0];
    // disparition du bouton "summarize" au clic.
    summarizeBtn.style.display = "none";
    const loader = document.getElementsByClassName("loader")[0];
    // fait apparaître le loader quand on clic sur "summarize"
    loader.style.display = "inline";

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
            "81f3c54c74msh1cc7eeb18af127cp12b374jsnec21c26dd53c",
          "X-RapidAPI-Host": "youtube-summary-multilanguage.p.rapidapi.com",
        },
        body: JSON.stringify({
          url: window.location.href,
          lang,
        }),
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        // ré-affichage du bouton "Summarize" quand la requête a abouti.
        summarizeBtn.style.display = "flex";
        loader.style.display = "none";
        const parseResult = JSON.parse(result);

        if (
          parseResult.error ===
          "It's not possible to make a summary for this video because it doesn't have a transcript"
        ) {
          alert(parseResult.error);
        } else if (parseResult.error !== null) {
          alert("Something went wrong, please try again later !");
        }

        if (parseResult.summary) {
          // condition ternaire vérifiant la présence du mot "summary" dans le retour de la requête. 
          paragraph.innerHTML = parseResult.summary.text.split("Summary:")[1]
            ? parseResult.summary.text.split("Summary:")[1]
            : parseResult.summary.text;
          paragraph.style.fontSize = "16px";
          paragraph.style.backgroundColor = "#f5002b5e";
          paragraph.style.padding = "10px";
          paragraph.style.borderRadius = "15px";
          paragraph.style.marginTop = "5px";
          description.append(title, paragraph);
          description.style.display = "block";
        }
      } catch (error) {
        summarizeBtn.style.display = "flex";
        loader.style.display = "none";
      }
    }
  };

  const newVideoLoaded = async () => {
    const bookmarkBtnExists =
      document.getElementsByClassName("bookmark-btn")[0];

    currentVideoBookmarks = await fetchBookmarks();
    if (!bookmarkBtnExists) {
      const bookmarkBtn = document.createElement("img");
      bookmarkBtn.src = chrome.runtime.getURL("assets/pin.png");
      bookmarkBtn.className = "ytp-button " + "bookmark-btn";
      bookmarkBtn.title = "Click to bookmark current timestamp";

      youtubeLeftControls =
        document.getElementsByClassName("ytp-left-controls")[0];
      youtubePlayer = document.getElementsByClassName("video-stream")[0];
      youtubeLeftControls.append(bookmarkBtn);

      bookmarkBtn.addEventListener("click", addNewBookmarkEventHandler);
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

    const loadingSpanExists = document.getElementsByClassName("loader")[0];
    if (!loadingSpanExists) {
      const loader = document.createElement("span");
      loader.className = "loader";
      // Define the CSS code as a string
const cssCode = `
.loader {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    position: relative;
    animation: rotate 5s linear infinite;
}

.loader::before, .loader::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid #FFF;
    animation: prixClipFix 2.5s ease-in-out infinite;
}

.loader::after {
    border-color: #FF3D00;
    animation: prixClipFix 2.5s linear infinite, rotate 1s linear infinite reverse;
    inset: 6px;
}

@keyframes rotate {
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
}

@keyframes prixClipFix {
    0% { clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0) }
    25% { clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0) }
    50% { clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%) }
    75% { clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%) }
    100% { clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0) }
}
`;

// Create a <style> element and set its content to the CSS code
const styleElement = document.createElement('style');
styleElement.textContent = cssCode;

// Append the <style> element to the <head> of the document
document.head.appendChild(styleElement);

      loader.style.display = "none";
      youtubeLeftControls.append(loader);
    }

    const selectInputExists =
      document.getElementsByClassName("languagesOptions")[0];
    if (!selectInputExists) {
      const languageList = document.createElement("select");
      languageList.className = "languagesOptions";
      languageList.style.height = "40px";
      languageList.style.marginTop = "5px";
      languageList.style.borderRadius = "5px";
      languageList.style.fontWeight = "bold";
      languageList.style.fontSize = "16px";
      const arrayOfLanguages = ["fr", "en", "de", "it", "es", "zh"];
      for (const language of arrayOfLanguages) {
        const option = document.createElement("option");
        if (language === "zh") {
          option.text = "cn";
        } else {
          option.text = language;
        }
        option.value = language;
        languageList.append(option);
      }
      youtubeLeftControls.append(languageList);
      languageList.addEventListener("change", (e) => {
        lang = e.target.value;
      });
    }
  };

  chrome.runtime.onMessage.addListener(async (obj, sender, response) => {
    const { type, value, videoId } = obj;
    if (type === "NEW") {
      currentVideo = videoId;
      newVideoLoaded();
    } else if (type === "PLAY") {
      youtubePlayer.currentTime = value;
    } else if (type === "DELETE") {
      currentVideoBookmarks = await fetchBookmarks();
      currentVideoBookmarks = currentVideoBookmarks.filter(
        (b) => b.time != value
      );
      chrome.storage.sync.set({
        [currentVideo]: JSON.stringify(currentVideoBookmarks),
      });

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
