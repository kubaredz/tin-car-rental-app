exports.showClientList = (req, res, next) => {
    res.render('pages/client/client-list', {});
}

exports.showClientNew = (req, res, next) => {
    res.render('pages/client/new-client', {});
}

exports.showClientDetails = (req, res, next) => {
    res.render('pages/client/client-detail', {});
}

exports.showClientEdit = (req, res, next) => {
    res.render('pages/client/client-edit', {});
}