import { React, useState } from "react";

import "../AdminPanel/adminPanel.css";

import UploadService from "../../services/uploadService";
import BackupIcon from '@mui/icons-material/Backup';

function AdminPanel(url) {
  const [movieId, setMovieId] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [movieName, setMovieName] = useState("");
  const [movieDescp, setMovieDescp] = useState("");
  const [release, setRelease] = useState("");
  const [popularity, setPopularity] = useState("");
  const [budget, setBudget] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [poster, setPoster] = useState("");
  const [backDrop, setBackDrop] = useState("");
  const [media, setMedia] = useState("");
  const [message, setMessage] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [datas, setDatas] = useState([]);

  // console.log(url);

  // const required = (value) => {
  //     if (!value) {
  //         setMessage("Plz Fill Out all the required Fields")
  //         return (
  //             <div className="failure_msg">
  //                 <sup>*</sup>This field is required!
  //             </div>
  //         );
  //     }
  // };

  const add_genre = (e) => {
    e.preventDefault();
    // console.log("sdjfbsdjfj")
    UploadService.addGenre(movieId, datas)
  }

  const submit = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
    UploadService.upload(
      movieId,
      movieTitle,
      movieName,
      movieDescp,
      release,
      popularity,
      budget,
      revenue,
      poster,
      backDrop,
      media
    ).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setMessage(resMessage);
        setSuccessful(false);
      }
    );
    // console.log("message ", message);
  };
  const onchangeInput = (e) => {
    const val = e.split(',').map((a) => { return (parseInt(a)) });
    setDatas(val)
    // console.log("@@@",datas);
  };

  function movieUpload(e) {
    e.preventDefault();
    window.cloudinary.openUploadWidget(
      {
        cloudName: "zohoott",
        uploadPreset: "Starnet+",
        sources: ["local", "url", "image_search", "google_drive", "dropbox"],
        googleApiKey: "<image_search_google_api_key>",
        showAdvancedOptions: false,
        cropping: true,
        multiple: false,
        defaultSource: "local",
        styles: {
          palette: {
            window: "#000000",
            windowBorder: "#F40612",
            tabIcon: "#F40612",
            menuIcons: "#5A616A",
            textDark: "#000000",
            textLight: "#FFFFFF",
            link: "#FBFDFF",
            action: "#FF620C",
            inactiveTabIcon: "#F8F9FA",
            error: "#888888",
            inProgress: "#0078FF",
            complete: "#20B832",
            sourceBg: "#A3A3A3",
          },
          fonts: {
            default: null,
            "'Fira Sans', sans-serif": {
              url: "https://fonts.googleapis.com/css?family=Fira+Sans",
              active: true,
            },
          },
        },
      },
      (err, info) => {
        if (!err) {
          if (info.event == "success") {
            if (e.target.id == "bd") {
              setBackDrop(info.info.url.substring(63));
            } else if (e.target.id == "p") {
              setPoster(info.info.url.substring(63));
            } else if ("mp" == e.target.id) {
              setMedia(info.info.url.substring(63));
            }
          }
        }
      }
    );
  };
  return (
    <>
      <>
        <div className="container">
          <div className="updateMovie">
            <h1 className="formTitle">Upload Movie</h1>
            <form action="" className="updateForm">
              <div className="movieInput">
                <label htmlFor="id">Movie Id</label>
                <input type="number"
                  required
                  value={movieId}
                  onChange={(x) => setMovieId(x.target.value)} />
              </div>
              <div className="movieInput">
                <label htmlFor="movie_name">Movie Name</label>
                <input type="text"
                  required
                  value={movieName}
                  onChange={(x) => setMovieName(x.target.value)} />
              </div>
              <div className="movieInput">
                <label htmlFor="movie_title">Movie Title</label>
                <input type="text"
                  required
                  value={movieTitle}
                  onChange={(x) => setMovieTitle(x.target.value)} />
              </div>
              <div className="movieInput">
                <label htmlFor="movie_release">Release Date</label>
                <input type="date"
                  required
                  value={release}
                  onChange={(x) => setRelease(x.target.value)} />
              </div>
              <div className="movieInput">
                <label htmlFor="movie_popularity">Movie Popularity</label>
                <input type="number" step="0.1"
                  value={popularity}
                  onChange={(x) => setPopularity(x.target.value)} />
              </div>
              <div className="movieInput">
                <label htmlFor="movie_budget">Add Budget</label>
                <input type="number"
                  required
                  placeholder="0"
                  // value={budget}
                  onChange={(x) => setBudget(x.target.value)} />
              </div>
              <div className="movieInput">
                <label htmlFor="movie_revenue">Revenue</label>
                <input type="number"
                  value={revenue}
                  onChange={(x) => setRevenue(x.target.value)} />
              </div>
              <div className="movieInput">
                <label htmlFor="movie_poster">Poster URL</label>
                <div className="urlContainer">
                  <input type="text"
                    required
                    value={poster}
                    onChange={(x) => setPoster(x.target.value)}
                    disabled={true} />
                  <div id="p" className="Upload_btn" onClick={(e) => movieUpload(e)}>
                    <BackupIcon />
                  </div>
                </div>
              </div>
              <div className="movieInput">
                <label htmlFor="movie_thumbnail">Thumbnail URL</label>
                <div className="urlContainer">
                  <input type="text"
                    required
                    value={backDrop}
                    onChange={(x) => setBackDrop(x.target.value)}
                    disabled={true} />

                  <div id="bd" className="Upload_btn" onClick={(e) => movieUpload(e)}>
                    <BackupIcon />
                  </div>
                </div>
              </div>
              <div className="movieInput">
                <label htmlFor="movie_url">Movie URL</label>
                <div className="urlContainer">
                  <input type="text"
                    required
                    value={media}
                    onChange={(x) => setMedia(x.target.value)}
                    disabled={true} />

                  <div id="mp" className="Upload_btn" onClick={(e) => movieUpload(e)}>
                    <BackupIcon />
                  </div>
                </div>
              </div>
              <div className="movieInput description">
                <label htmlFor="movie_descp">Movie Description</label>
                <textarea type="text"
                  required
                  value={movieDescp}
                  onChange={(x) => setMovieDescp(x.target.value)} />
              </div>
              <div className="movieInput genreInput">
                <label htmlFor="movie_descp">
                  Add Genres
                </label>
                <input type="text" onChange={(e) => onchangeInput(e.target.value)} />
              </div>
            </form>
          </div>
          <div className="update_btn">
            <button className="sign_up_btn" onClick={submit}>
              Upload
            </button>
          </div>
          {message && (
            <div className="alert_area">
              <div
                className={
                  successful ? "success_msg" : "failure_msg"
                }
              >
                {message ? message : setMessage(" ")}

                {message ? message : setMessage(" ")}
              </div>
            </div>
          )}
        </div>
      </>
    </>
  );

}

export default AdminPanel;
