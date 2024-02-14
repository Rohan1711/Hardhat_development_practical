const { expect }=reuqire("chai");

describe("token contract", function() {
    it("deploymet should assign the totalSupply of the token to the owner", async function() {
        const [owner]= await ethers.getSigners();
        console.log("Signer object: ",owner);

        const hardhatToken= await ethers.deployContract("Token");

        const ownerBalance = await hardhatToken.balanceOf(owner.address);

        console.log("owner address :",owner.address);

        console.log("owner balance :",ownerBalance);

        expect(await hardhatToken.totalSupply().to.equal(ownerBalance));

    });
});
