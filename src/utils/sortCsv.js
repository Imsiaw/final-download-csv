const sortCsv = (csvData, sorts) => {
  csvData.sort((a, b) => {
    if (sorts.sPrice != "") {
      if (a.price == "") {
        return 1;
      }
      if (b.price == "") {
        return -1;
      }
      return sorts.sPrice === "ascending"
        ? a.price - b.price
        : b.price - a.price; //Descending
    } else if (sorts.sPageRank != "") {
      if (a.ahrefsDomainRating == "") {
        return 1;
      }
      if (b.ahrefsDomainRating == "") {
        return -1;
      }
      return sorts.sPageRank === "ascending"
        ? a.ahrefsDomainRating - b.ahrefsDomainRating
        : b.ahrefsDomainRating - a.ahrefsDomainRating; //Descending
    } else if (sorts.sbackLinks != "") {
      if (a.backlinksCount == "") {
        return 1;
      }
      if (b.backlinksCount == "") {
        return -1;
      }
      return sorts.sbackLinks === "ascending"
        ? a.backlinksCount - b.backlinksCount
        : b.backlinksCount - a.backlinksCount; //Descending
    } else if (sorts.sTimeLeft != "") {
      if (a.endDate == "") {
        return 1;
      }
      if (b.endDate == "") {
        return -1;
      }
      const aTime = new Date(a.endDate).getTime();
      const bTime = new Date(b.endDate).getTime();
      return sorts.sTimeLeft === "ascending" ? aTime - bTime : bTime - aTime; //Descending
    } else if (sorts.sRegYear != "") {
      if (a.registeredDate == "") {
        return 1;
      }
      if (b.registeredDate == "") {
        return -1;
      }
      const aTime = new Date(a.registeredDate).getTime();
      const bTime = new Date(b.registeredDate).getTime();
      return sorts.sRegYear === "ascending" ? aTime - bTime : bTime - aTime; //Descending
    } else if (sorts.sBids != "") {
      if (a.bidCount == "") {
        return 1;
      }
      if (b.bidCount == "") {
        return -1;
      }
      return sorts.sBids === "ascending"
        ? a.bidCount - b.bidCount
        : b.bidCount - a.bidCount; //Descending
    }
  });
  return csvData;
};

module.exports = { sortCsv };
