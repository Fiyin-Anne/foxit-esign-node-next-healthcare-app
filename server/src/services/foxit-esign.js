const axios = require('axios');

const generateToken = async () => {
    try {
        const response = await axios.post('https://na1.foxitesign.foxit.com/api/oauth2/access_token', {
            client_id: process.env.API_KEY,
            client_secret: process.env.API_SECRET,
            scope: 'read-write',
            grant_type: 'client_credentials'
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
  
        return response?.data?.access_token;    
    } catch (err) {
        throw new Error(err.message)
    }
}

const generateSigningSession = async (data) => {
    let response;
    try{ 
        let { firstName, lastName, email, id } = data;

        let token = await generateToken();

        if(!token) throw new Error('No token generated.');

        response = await axios.post('https://na1.foxitesign.foxit.com/api/templates/createFolder',
            {
                "folderName": "Patient Registeration",
                "templateIds": [
                    302266
                ],
                "parties": [
                    {
                        "firstName": `${firstName}`,
                        "lastName": `${lastName}`,
                        "emailId": `${email}`,
                        "permission": "FILL_FIELDS_AND_SIGN",
                        "sequence": 1
                    }
                ],
                "signInSequence": false,
                "createEmbeddedSigningSession": true,
                "createEmbeddedSigningSessionForAllParties": true,
                "signSuccessUrl": `http://localhost:3000/patients/${id}`,
                "signErrorUrl": "http://localhost:3000/",
                "themeColor": "#0066CB",
                "applyTemplateDefault": true
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }
        )
        
        return response.data.embeddedSigningSessions[0].embeddedSessionURL;

    } catch (err) {
        throw new Error(err.message)
    }

}

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

module.exports = { generateToken, generateSigningSession, downloadDocument };
