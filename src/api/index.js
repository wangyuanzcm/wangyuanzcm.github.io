import axios from "axios";
// let mapUrl={
//     getData:"http://localhost:3000/profile"
// }
const baseUrl = "https://api.github.com/repos/wangyuanzcm/hiker-blog/issues";
let mapUrl = {
  getData: baseUrl,
};
export function fetchProfileData() {
  let dataPromise = fetchData();
  return {
    datalist: wrapPromise(dataPromise),
  };
}

// Suspense integrations like Relay implement
// a contract like this to integrate with React.
// Real implementations can be significantly more complex.
// Don't copy-paste this into your project!
function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}

function fetchData() {
  return new Promise((resolve, reject) => {
    const url = mapUrl["getData"];
    axios
      .get(url)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function createComents(id, { body = "" }) {
  return new Promise((resolve, reject) => {
    const url = baseUrl + "/" + id + "/comments";
    axios
      .post(
        url,
        {
          body,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "token XXXXXXX", //token需要自己保存
          },
        }
      )
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}