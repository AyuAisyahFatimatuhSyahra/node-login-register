'use strict'

const express = require('express')
const pendudukController = require('../controllers/penduduk.controller')
const router = new express.Router();
const {checkToken} = require("../auth/token_validation")

router.get("/getAll",checkToken, pendudukController.getAll)
router.get("/getId/:id", checkToken, pendudukController.getId)
router.post("/add",checkToken, pendudukController.add)
router.put("/update/:id",checkToken,pendudukController.update)
router.delete("/delete/:id",checkToken, pendudukController.delete)
router.post("/daftar", pendudukController.registrasi)
router.post("/login", pendudukController.login)

module.exports = router