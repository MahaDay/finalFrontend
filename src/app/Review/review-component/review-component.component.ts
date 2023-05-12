import { Component, NgModule, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/_services/review.service';
import web3 from 'web3';


@Component({
  selector: 'app-review-component',
  templateUrl: './review-component.component.html',
  styleUrls: ['./review-component.component.css']
})

export class ReviewComponentComponent implements OnInit{
  reviews: any[] = [];
  comment: any;
  rating: any;

  constructor(private reviewService: ReviewService) { }
  async ngOnInit() {
    const reviewCount = await this.reviewService.getReviewCount();
    for (let i = 0; i < reviewCount; i++) {
    const [reviewer, comment, rating] = await this.reviewService.getReview(i);
    this.reviews.push({ index: i, reviewer, comment, rating });
    }
    }
    
    async addReview() {
    await this.reviewService.addReview(this.comment, this.rating);
    const reviewCount = await this.reviewService.getReviewCount();
    const [reviewer, comment, rating] = await this.reviewService.getReview(reviewCount - 1);
    this.reviews.push({ index: reviewCount - 1, reviewer, comment, rating });
    this.comment = '';
    this.rating = null;
    }

  

}
