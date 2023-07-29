const extractFilters = (query) => ({
  onlyNumber: query.onlyNumber != null ? query.onlyNumber : "",
  noNumber: query.noNumber != null ? query.noNumber : "",
  noHyphens: query.noHyphens != null ? query.noHyphens : "",
  nsfwNames: query.nsfwNames != null ? query.nsfwNames : "",
  extension: query.extension != null ? query.extension : "",
  priceRange: query.priceRange != null ? query.priceRange : "",
  nameRange: query.nameRange != null ? query.nameRange : "",
  bidsRange: query.bidsRange != null ? query.bidsRange : "",
  regYearRange: query.regYearRange != null ? query.regYearRange : "",
  pageRankRange: query.pageRankRange != null ? query.pageRankRange : "",
  backLinksRange: query.backLinksRange != null ? query.backLinksRange : "",
  ahrefSeoRange: query.ahrefSeoRange != null ? query.ahrefSeoRange : "",
  name: query.name != null ? query.name : "",
});

module.exports = { extractFilters };
