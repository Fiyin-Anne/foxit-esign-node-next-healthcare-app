const axios = require('axios');
const { generateToken } = require('../services/generateSigningSession');

const downloadDocument = async (data) => {
    try {
        let token = await generateToken();
        if(!token) throw new Error('No token generated.');

        let { folderId, docNumber } = data;
        docNumber = Number(docNumber)*1 || 1;
        let downloadUrl = `https://na1.foxitesign.foxit.com/api/folders/document/download?folderId=${folderId}&docNumber=${docNumber=1}&access_token=${token}`;
        return downloadUrl;
    } catch (err) {
        throw new Error(err.message)
    }
}

module.exports = { downloadDocument }