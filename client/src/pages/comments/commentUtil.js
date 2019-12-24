
export  function commentName(type) {

  switch (type) {
    case "1":
      return  "Log Time";
    case "2":
      return  "Ask Question"
    case "3":
      return  "Answer Question"
    case "4":
      return  "Notification"
      default:
      return "";
  }
}

export  function commentFlag(type) {

  switch (type) {
    case "3":
      return  2;
    case "4":
      return  3;
    default:
    return 0;

  }
}
