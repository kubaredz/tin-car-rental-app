exports.showCarList = (req, res, next) => {
    res.render('pages/car/car-list', {});
}

exports.showCarNew = (req, res, next) => {
    res.render('pages/car/new-car', {});
}

exports.showCarDetails = (req, res, next) => {
    res.render('pages/car/car-detail', {});
}

exports.showCarEdit = (req, res, next) => {
    res.render('pages/car/car-edit', {});
}