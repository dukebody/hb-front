export interface IButton {
  id?: any | null,
  owner: any,
  name: string,
  templateButtonId: any | null,
  type: enum,
  tags: [Itag],
  description: string,
  //required data
  date: [],
  //GIS DATA
  geoPlace: [],
  // optional values
  networks: [],
  feedType: enum, //enum {single,group} feed structure
  templateExtraData: {}, //JSON template contains info about the image and the description (standard) and also about booleans, radius, checklist and every other field related to the network module
}
