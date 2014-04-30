framework.onAuthorization = function(req, res, flags, next) { 
    var self=this;  
    var cookie=req.cookie('cookie-user');
    if (cookie === "") {            
       	 next(false); 
         return;        
    }    
    else { 
      	 var userId=self.decrypt(cookie, 'cle-pour-decrypt');   
      	 next(true);
    }
}
