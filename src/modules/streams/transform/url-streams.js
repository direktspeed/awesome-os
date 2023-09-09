// import * as urlStreams from "./url-streams.js"

// new TransformStream(urlStreams.fetch)
export const fetch = {transform(fetchArguments,controller){
  globalThis.fetch(fetchArguments).then(controller.enqueue);
}};
  
export const reFetchIfPossible = transform(response,controller){
  data.statusCode.startsWith(3) && controller.enqueue(response.url)
}};
