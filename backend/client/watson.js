const fs = require('fs');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: process.env.APIKEY || 'nh6z-3oQXaDOnHQ3deisCOYTEnDTOi9LcqQPHYkLXEyn',
  }),
  serviceUrl: process.env.URLKEY || 'https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/c61c91ba-676f-41a3-85dd-8ad81e8effb7',
});

module.exports.tts = async (req, res) => {  
  if (!req.body.text || !req.body.id) {
		res.status(400).send({
			message: "params missing"
		});
	}
  
  try {
    const { text, id } = req.body;
    const synthesizeParams = {
      text: text,
      accept: 'audio/wav',
      voice: 'pt-BR_IsabelaV3Voice',
    };

  textToSpeech.synthesize(synthesizeParams)
    .then(response => {
      return textToSpeech.repairWavHeaderStream(response.result);
    })
    .then(buffer => {
      fs.writeFileSync(`./public/${id}.wav`, buffer);
    }).then(response => {
      res.send({status: "ok"})
    })
    .catch(err => {
      console.log('error:', err);
    });

  } catch {err => {
    console.log('error:', err);
    }
  };
}
