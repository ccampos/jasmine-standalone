describe("Hello", function() {
    it("says hello", function() {
        expect(helloWorld()).toContain("World");
    });
});

describe("Divisible by Two", function() {

    beforeEach(function() {
        this.addMatchers({
            toBeDivisibleByTwo: function() {
                return (this.actual % 2) === 0;
            }
        });
    });

    it('is divisible by 2', function() {
        expect(gimmeANumber()).toBeDivisibleByTwo();
    });

});

describe("Person", function() {
    it("calls the helloSomeone() function", function() {
        var fakePerson = new Person();
        spyOn(fakePerson, "helloSomeone");
        fakePerson.helloSomeone("world");
        expect(fakePerson.helloSomeone).toHaveBeenCalledWith("world");
    });

    it("calls the sayHello() function", function() {
        var fakePerson = new Person();
        spyOn(fakePerson, "sayHello");
        fakePerson.helloSomeone("world");
        expect(fakePerson.sayHello).toHaveBeenCalled();
    });
});
