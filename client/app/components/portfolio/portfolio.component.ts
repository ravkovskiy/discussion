import {Component} from "angular2/core";
import {PortfolioService} from "../portfolio/portfolio.service";
@Component({
    selector: 'portfolio_component',
    templateUrl: "./components/portfolio/portfolio.template.html",
})
export class PortfolioComponent{
    constructor(public portfolioService:PortfolioService) {
        
    }
    //need change start value portfolioItem!!!!!!!!!!!
    
    portfolioItem = this.portfolioService.portfolioList[0];
    onClickPortfolioItem(clickItem) {
        this.portfolioItem=clickItem;
        var closeModal=document.getElementsByClassName('carousel-control')[1];
        var innerWidthBrowser = window.innerWidth;
        var clientWidthBrowser = document.documentElement.clientWidth;
        closeModal.style.width=innerWidthBrowser*0.15+(innerWidthBrowser-clientWidthBrowser)+'px';
    }
    onClickModalPortfolioItem(event, action) {
        if(event.which != 1) return;
        var lengthPortfolio = this.portfolioService.portfolioList.length;
        var positionPortfolioItemClick = this.portfolioService.portfolioList.indexOf(this.portfolioItem);
        switch(action) {
            case 'Next':
                positionPortfolioItemClick == lengthPortfolio-1 ?
                    this.portfolioItem = this.portfolioService.portfolioList[0] :
                    this.portfolioItem = this.portfolioService.portfolioList[positionPortfolioItemClick + 1];
                break;
            case 'Prev':
                positionPortfolioItemClick == 0 ?
                    this.portfolioItem = this.portfolioService.portfolioList[lengthPortfolio - 1] :
                    this.portfolioItem = this.portfolioService.portfolioList[positionPortfolioItemClick - 1];
                break;
        }
      
    }
}
