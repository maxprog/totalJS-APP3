var documentSchema = mongoose.Schema(
	{ 
		voyage : String,
		link: String, 
		title : String,
		document : String 
	}, 
	{ collection : 'documents' })
module.exports = mongoose.model('document', documentSchema);