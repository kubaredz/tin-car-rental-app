exports.showRentList = (req, res, next) => {
    res.render('pages/rent/rent-list', {});
}

exports.showRentNew = (req, res, next) => {
    res.render('pages/rent/new-rent', {});
}

exports.showRentDetails = (req, res, next) => {
    res.render('pages/rent/rent-detail', {});
}

exports.showRentEdit = (req, res, next) => {
    res.render('pages/rent/rent-edit', {});
}