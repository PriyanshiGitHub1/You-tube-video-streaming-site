export const API_KEY = 'AIzaSyA8rA-MJBW3l9iZoD8say5XvKhkGE9IA1E';

export const valueConverter =(value) => {
  if(value >= 1000000) {
    return Math.floor(value/1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value/1000) + "K";
  } else {
    return value;
  }
}

