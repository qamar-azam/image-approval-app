// A mock function to mimic making an async request for data

import {unsplashApi} from "../../App"

export function fetchImage(amount = 1) {
  return unsplashApi.photos.getRandom({
    count: 1,
  });
}
