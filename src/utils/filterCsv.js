const filterCsv = (csvData, filter) => {
  return csvData.filter((d) => {
    const isPass = [];

    if (filter.backLinksRange != "") {
      const [min, max] = filter.backLinksRange.split("-");
      const backlinksCount =
        d.backlinksCount == "" || Number.isNaN(Number(d.backlinksCount))
          ? 0
          : Number(d.backlinksCount);

      if (backlinksCount >= min && backlinksCount <= max) {
        isPass.push(true);
      } else {
        isPass.push(false);
      }
    }

    if (filter.bidsRange != "") {
      const [min, max] = filter.bidsRange.split("-");
      const bidCount =
        d.bidCount == "" || Number.isNaN(Number(d.bidCount))
          ? 0
          : Number(d.bidCount);

      if (bidCount >= min && bidCount <= max) {
        isPass.push(true);
      } else {
        isPass.push(false);
      }
    }

    if (filter.extension != "") {
      const splittedDomain = d.name.split(".");
      const extension = splittedDomain[splittedDomain.length - 1].trim();
      if (extension === filter.extension) {
        isPass.push(true);
      } else {
        isPass.push(false);
      }
    }

    if (filter.nameRange != "") {
      const [min, max] = filter.nameRange.split("-");
      const name = d.name.trim();
      const splittedDomain = name.split(".");
      const fullname = splittedDomain
        .slice(0, splittedDomain.length - 1)
        .join(".");
      if (fullname.length >= min && fullname.length <= max) {
        isPass.push(true);
      } else {
        isPass.push(false);
      }
    }

    if (filter.noHyphens != "") {
      const name = d.name.trim();
      const splittedDomain = name.split(".");
      const fullname = splittedDomain
        .slice(0, splittedDomain.length - 1)
        .join(".");
      if (fullname.search("-") == -1) {
        isPass.push(true);
      } else {
        isPass.push(false);
      }
    }

    if (filter.noNumber != "") {
      const name = d.name.trim();
      const splittedDomain = name.split(".");
      const fullname = splittedDomain
        .slice(0, splittedDomain.length - 1)
        .join(".");

      if (!/[0-9]/.test(fullname)) {
        isPass.push(true);
      } else {
        isPass.push(false);
      }
    }

    if (filter.onlyNumber != "") {
      const name = d.name.trim();
      const splittedDomain = name.split(".");
      const fullname = splittedDomain
        .slice(0, splittedDomain.length - 1)
        .join(".");

      if (/^\d+$/.test(fullname)) {
        isPass.push(true);
      } else {
        isPass.push(false);
      }
    }

    if (filter.name != "") {
      const name = d.name.trim();
      const splittedDomain = name.split(".");
      const fullname = splittedDomain
        .slice(0, splittedDomain.length - 1)
        .join(".");

      if (new RegExp(filter.name).test(fullname)) {
        isPass.push(true);
      } else {
        isPass.push(false);
      }
    }

    if (filter.pageRankRange != "") {
      const [min, max] = filter.pageRankRange.split("-");

      const ahrefsDomainRating =
        d.ahrefsDomainRating == "" || Number.isNaN(Number(d.ahrefsDomainRating))
          ? 0
          : Number(d.ahrefsDomainRating);

      if (ahrefsDomainRating >= min && ahrefsDomainRating <= max) {
        isPass.push(true);
      } else {
        isPass.push(false);
      }
    }

    if (filter.priceRange != "") {
      const [min, max] = filter.priceRange.split("-");

      const price =
        d.price == "" || Number.isNaN(Number(d.price)) ? 0 : Number(d.price);

      if (price >= min && price <= max) {
        isPass.push(true);
      } else {
        isPass.push(false);
      }
    }

    if (filter.regYearRange != "") {
      let [min, max] = filter.regYearRange.split("-");
      min = new Date(min).getTime();
      max = new Date(max).getTime();

      const registeredDate = new Date(d.registeredDate).getTime();

      if (d.registeredDate == "") {
        isPass.push(false);
      } else {
        if (registeredDate >= min && registeredDate <= max) {
          isPass.push(true);
        } else {
          isPass.push(false);
        }
      }
    }

    return isPass.filter((p) => !p).length == 0;
  });
};

module.exports = { filterCsv };
