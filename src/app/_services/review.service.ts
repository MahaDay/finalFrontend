import { Inject, Injectable } from '@angular/core';
import Web3 from 'web3';
import { ReviewComponentComponent } from '../Review/review-component/review-component.component';



declare let window: any;

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private web3: any;
  private account: any;
  private contract: any;

  constructor(private reviewComponentComponent: ReviewComponentComponent) {
    if (typeof window.web3 !== 'undefined') {
      this.web3 = new Web3(window.web3.currentProvider);
    } else {
      this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    }

    this.contract = new this.web3.eth.Contract(ReviewComponentComponent.constructor, '0x...');
  }

  async addReview(comment: string, rating: number) {
    const accounts = await this.web3.eth.getAccounts();
    this.account = accounts[0];

    return this.contract.methods.addReview(comment, rating).send({ from: this.account });
  }

  async getReviewCount() {
    return this.contract.methods.getReviewCount().call();
  }

  async getReview(index: number) {
    return this.contract.methods.getReview(index).call();
  }

}

