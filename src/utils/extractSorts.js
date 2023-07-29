const extractSorts = (query) => ({
  sPrice: query.sPrice != null ? query.sPrice : "",
  sTimeLeft: query.sTimeLeft != null ? query.sTimeLeft : "",
  sBids: query.sBids != null ? query.sBids : "",
  sRegYear: query.sRegYear != null ? query.sRegYear : "",
  sPageRank: query.sPageRank != null ? query.sPageRank : "",
  sbackLinks: query.sbackLinks != null ? query.sbackLinks : "",
  sAhrefSeo: query.sAhrefSeo != null ? query.sAhrefSeo : "",
});
module.exports = { extractSorts };
