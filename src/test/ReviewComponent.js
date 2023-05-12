import { ethers } from 'ethers';

describe('ReviewComponent', function () {
  

  beforeEach(async function () {
    ReviewComponent = await ethers.getContractFactory('ReviewComponent');
    reviewComponent = await ReviewComponent.deploy();
    await reviewComponent.deployed();
  });

  it('should add a review', async function () {
    const review = { comment: 'Great product', rating: 5 };
    await reviewComponent.addReview(review.comment, review.rating);
    const reviewCount = await reviewComponent.getReviewCount();
    expect(reviewCount).to.equal(1);

    const [reviewer, comment, rating] = await reviewComponent.getReview(0);
    expect(reviewer).to.equal(await ethers.provider.getSigner(0).getAddress());
    expect(comment).to.equal(review.comment);
    expect(rating).to.equal(review.rating);
  });

  it('should return the correct review count', async function () {
    const review1 = { comment: 'Great product', rating: 5 };
    const review2 = { comment: 'Average product', rating: 3 };
    await reviewComponent.addReview(review1.comment, review1.rating);
    await reviewComponent.addReview(review2.comment, review2.rating);
    const reviewCount = await reviewComponent.getReviewCount();
    expect(reviewCount).to.equal(2);
  });
});
