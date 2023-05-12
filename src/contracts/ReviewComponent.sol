// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

contract ReviewComponent {
 
 struct Review {
    address reviewer;
    string comment;
    uint8 rating;
  }

  Review[] public reviews;

  function addReview(string memory _comment, uint8 _rating) public {
    reviews.push(Review(msg.sender, _comment, _rating));
  }

  function getReviewCount() public view returns (uint256) {
    return reviews.length;
  }

  function getReview(uint256 _index) public view returns (address, string memory, uint8) {
    Review memory review = reviews[_index];
    return (review.reviewer, review.comment, review.rating);
  }
}
