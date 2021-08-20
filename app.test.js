var supertest = require("supertest");
var should = require("should");

const server = supertest.agent("localhost:8080")

describe("testing REST api", () => {
    it("testing GET ", (done) => {
        server.get("/add?x=100&y=250").
        expect("Content-type", /json/). 
        expect(200)
        .end( (err, res) => {
            res.status.should.equal(200) // assert
            //console.log(res.body)
            res.body.should.equal(350)
            done()
        })
    });
    it("testing POST",function(done){ 
        server
        .post('/add_post')
        .send({x : 10, y : 20})
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err,res){
          res.status.should.equal(201);
          res.body.should.equal(30);
          done();
        });
      });
});
    
