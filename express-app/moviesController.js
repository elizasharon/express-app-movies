let Movie=require('./movieModel')

exports.create = function(req,res){
    console.log('came inside the save method of moviescontroller');
    let movie=new Movie();
    movie.name=req.body.name;
    movie.save(function(){
        res.json({
            status:'successfully saved',
            data:movie
        })
    })
    
};
/*
exports.listAll = function(req,res){
    res.json([
        {
            id:1,
            name:'Kal Ho NA Ho'
        },
        {
            id:2,
            name:'Kuch Kuch hota hai'   
        },
        {
            id:3,
            name:'Hum sath sath hai'
        },
        {
            id:4,
            name:'Jurassic park'
        }
    ])
}

exports.getById = function(req,res){
    console.log(req.params.id)
    res.json({
        id:1,
        name:'Kal Ho NA Ho'
    })
}
*/
exports.listAll =function(req,res){
    Movie.find(function(err,list){
        if(err)
            res.send(err)
        res.json({
            message:'retrieving all',
            data:list
        })
    })
}


exports.getById = function (req, res) {
    Movie.findById(req.params.id, function (err, movie) {
        if (err)
            res.send(err);
        res.json({
            message: 'Contact details loading..',
            data: movie
        });
    });
};

exports.delete = function (req, res) {
    Movie.remove({
        _id: req.params.id
    }, function (err, movie) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'movie deleted'
        });
    });
};


exports.update = function (req, res) {
    Movie.findById(req.params.id, function (err, movie) {
            if (err)
                res.send(err);
    movie.name = req.body.name ? req.body.name : movie.name;
            
    // save the contact and check for errors
            movie.save(function (err) {
                if (err)
                    res.json(err);
                res.json({
                    message: 'movie Info updated',
                    data: movie
                });
            });
        });
    };