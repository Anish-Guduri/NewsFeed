
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles=[
        {
          "source": { "id": "cnn", "name": "CNN" },
          "author": "Eliott C. McLaughlin, CNN",
          "title": "Ahmaud Arbery's killers face sentencing today, but the sprawling legal saga is far from over - CNN",
          "description": "The three White men who chased and murdered Ahmaud Arbery are due to return Friday to the Glynn County Courthouse where they were convicted to learn whether they'll spend their lives in prison.",
          "url": "https://www.cnn.com/2022/01/07/us/ahmaud-arbery-sentencing-killers-mcmichael-bryan/index.html",
          "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211115120233-02-mcmichael-bryan-mugshots-split-super-tease.jpg",
          "publishedAt": "2022-01-07T12:10:00Z",
          "content": "(CNN)The three White men who chased and murdered Ahmaud Arbery are due to return Friday to the Glynn County Courthouse where they were convicted to learn whether they'll spend their lives in prison. … [+8360 chars]"
        },
        {
          "source": { "id": "cnn", "name": "CNN" },
          "author": "Toyin Owoseje, CNN",
          "title": "Andrew Garfield finally talks about playing Peter Parker again in 'Spider-Man: No Way Home' - CNN",
          "description": "Andrew Garfield is finally talking about his extended cameo in \"Spider-Man: No Way Home.\"",
          "url": "https://www.cnn.com/2022/01/07/entertainment/andrew-garfield-spider-man-intl-scli/index.html",
          "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220107041237-andrew-garfield-12122021-restricted-super-tease.jpg",
          "publishedAt": "2022-01-07T11:54:00Z",
          "content": null
        },
        {
          "source": { "id": null, "name": "New York Times" },
          "author": "Shashank Bengali",
          "title": "Covid-19, Omicron and Booster News: Live Updates - The New York Times",
          "description": "The number of known cases, likely an undercount, is now less of an indicator than it used to be in determining pandemic strategy. Governments are marshaling resources toward vaccinating people.",
          "url": "https://www.nytimes.com/live/2022/01/07/world/omicron-covid-vaccine-tests",
          "urlToImage": "https://static01.nyt.com/images/2022/01/07/world/07virus-briefing-promo-1/07virus-briefing-promo-1-facebookJumbo.jpg",
          "publishedAt": "2022-01-07T11:15:00Z",
          "content": "It took more than a year for the world to record the first 100 million coronavirus cases, and half that time to tally the next 100 million.\r\nThe third 100 million came even faster, in barely five mon… [+4978 chars]"
        },
        {
          "source": { "id": null, "name": "CNBC" },
          "author": "Robert Frank",
          "title": "Most expensive home in America lists for $295 million, may head to auction - CNBC",
          "description": "Along with a record-setting price, the property known as \"The One,\" in the Bel Air section of Los Angeles, comes with a history of drama, lawsuits and debt.",
          "url": "https://www.cnbc.com/2022/01/07/most-expensive-home-in-america-lists-for-295-million-may-head-to-auction.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/106998053-1641517061268944AiroleWay-print-8.jpg?v=1641517904",
          "publishedAt": "2022-01-07T11:00:01Z",
          "content": "A 105,000-square-foot megamansion, known as \"The One,\" in the Bel Air section of Los Angeles listed Friday for $295 million, making it the most expensive listing in America.\r\nThe property, which has … [+5935 chars]"
        },
        {
          "source": { "id": "cnn", "name": "CNN" },
          "author": "Radina Gigova, Anna Chernova and Katharina Krebs, CNN",
          "title": "Kazakhstan leader orders security forces to 'kill without warning' to quell violent protests - CNN",
          "description": "Kazakhstan President Kassym-Jomart Tokayev has ordered security forces to \"kill without warning\" to stop the violent protests that have paralyzed the former Soviet republic.",
          "url": "https://www.cnn.com/2022/01/07/asia/kazakhstan-kassym-jomart-tokayev-address-intl/index.html",
          "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220107045334-kazakhstan-riot-police-01052022-super-tease.jpg",
          "publishedAt": "2022-01-07T10:13:00Z",
          "content": "The CSTO is a security alliance comprised of six member states: Russia, Belarus, Armenia, Kazakhstan, Kyrgyzstan and Tajikistan. It traces its origins to a regional treaty signed after the collapse o… [+1031 chars]"
        },
        {
          "source": { "id": null, "name": "New York Times" },
          "author": "Sydney Ember",
          "title": "Jobs Report, Stock Market and Other Business News: Live Updates - The New York Times",
          "description": "The December data was collected before the latest virus wave took deep hold.",
          "url": "https://www.nytimes.com/live/2022/01/07/business/stock-market-economy-news",
          "urlToImage": "https://static01.nyt.com/images/2022/01/07/multimedia/07economy-briefing-jobsreport/07economy-briefing-jobsreport-facebookJumbo.jpg",
          "publishedAt": "2022-01-07T10:02:23Z",
          "content": "Airlines are at odds with the European Union over rules that require them to use their takeoff and landing slots at airports, forcing them to fly thousands of nearly empty planes sometimes called gho… [+3495 chars]"
        },
        {
          "source": { "id": "cnn", "name": "CNN" },
          "author": "Ben Morse, CNN",
          "title": "'You're done': Bruce Arians, Tom Brady address Antonio Brown release following mid-game incident - CNN",
          "description": "Tampa Bay Buccaneers head coach Bruce Arians and star quarterback Tom Brady addressed Antonio Brown's departure from the team following Sunday's incident in which Brown dramatically walked off the field mid-game against the New York Jets.",
          "url": "https://www.cnn.com/2022/01/07/sport/antonio-brown-bruce-arians-tom-brady-spt-intl/index.html",
          "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220106122952-01-antonio-brown-leaves-game-0102-super-tease.jpg",
          "publishedAt": "2022-01-07T09:54:00Z",
          "content": null
        },
        {
          "source": { "id": null, "name": "SciTechDaily" },
          "author": null,
          "title": "Astronomers Capture Red Supergiant Star Exploding in Massive Supernova – For the Very First Time - SciTechDaily",
          "description": "Astronomers Capture Red Supergiant’s Death Throes “For the first time, we watched a red supergiant star explode,” researcher says. For the first time ever, astronomers have imaged in real time the dramatic end to a red supergiant’s life — watching the massive…",
          "url": "https://scitechdaily.com/astronomers-capture-red-supergiant-star-exploding-in-massive-supernova-for-the-very-first-time/",
          "urlToImage": "https://scitechdaily.com/images/Red-Supergiant-Star-Goes-Supernova.gif",
          "publishedAt": "2022-01-07T09:08:56Z",
          "content": "An artist’s impression of a red supergiant star in the final year of its life emitting a tumultuous cloud of gas. This suggests at least some of these stars undergo significant internal changes befor… [+6550 chars]"
        },
        {
          "source": { "id": null, "name": "CNET" },
          "author": "Dan Ackerman",
          "title": "The laptops of 2022: What we're looking forward to in the coming year - CNET",
          "description": "Better webcams and seamless switching may help make hybrid work more practical.",
          "url": "https://www.cnet.com/tech/computing/the-laptops-of-ces-2022-what-were-looking-forward-to-in-the-coming-year/",
          "urlToImage": "https://www.cnet.com/a/img/9DF5ShVwYbHwwN0PnTwjbfPyJQo=/1200x630/2021/10/23/561504f0-7f0b-498d-8379-43c0598c522e/macbook-pro-2021-cnet-review-01.jpg",
          "publishedAt": "2022-01-07T08:00:02Z",
          "content": "Dell's wireless webcam prototype. \r\nRichard Peterson/CNET\r\nThis story is part of The Year Ahead, CNET's look at how the world will continue to evolve starting in 2022 and beyond.\r\nThe years 2020 and … [+6971 chars]"
        },
        {
          "source": { "id": "bloomberg", "name": "Bloomberg" },
          "author": null,
          "title": "China Tests Thousands in IPhone City as Covid Cases Spread - Bloomberg",
          "description": null,
          "url": "https://www.bloomberg.com/tosv2.html?vid=&uuid=b2f90a14-6fa8-11ec-8bfc-644f43434c62&url=L25ld3MvYXJ0aWNsZXMvMjAyMi0wMS0wNy9jaGluYS1zZWVzLWNvdmlkLWNhc2VzLWFjcm9zcy1jb3VudHJ5LWV2ZW4tYWZ0ZXIteGktYW4tcy1kcm9w",
          "urlToImage": null,
          "publishedAt": "2022-01-07T07:29:49Z",
          "content": "To continue, please click the box below to let us know you're not a robot."
        },
        {
          "source": { "id": null, "name": "CNBC" },
          "author": "Silvia Amaro",
          "title": "European stocks trade lower as investors digest inflation data, await U.S. jobs numbers - CNBC",
          "description": "European stocks traded lower as investors digested euro zone inflation data and awaited key jobs numbers out of the U.S.",
          "url": "https://www.cnbc.com/2022/01/07/european-stock-futures-markets-lack-direction-after-sell-off.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/106995864-1641229663155-atrad.jpg?v=1641387973",
          "publishedAt": "2022-01-07T07:12:35Z",
          "content": "LONDON European stocks were lower on Friday as investors digest euro zone inflation data and awaited key jobs numbers out of the U.S.\r\nThe pan-European Stoxx 600 was down 0.3% in late morning deals.\r… [+2549 chars]"
        },
        {
          "source": { "id": null, "name": "BBC News" },
          "author": "https://www.facebook.com/bbcnews",
          "title": "Novak Djokovic saga: Australia investigates visas of other tennis players - BBC News",
          "description": "The Serb tennis star faces deportation amid a high-profile Covid-related visa controversy.",
          "url": "https://www.bbc.com/news/world-australia-59903785",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4C9B/production/_122611691_gettyimages-1351984679.jpg",
          "publishedAt": "2022-01-07T06:47:47Z",
          "content": "Media caption, Watch: The BBC's Shaimaa Khalil reports from outside hotel where Djokovic is being detained\r\nNovak Djokovic is not being held captive in Australia, a top official says, as the men's wo… [+4951 chars]"
        },
        {
          "source": { "id": "fox-news", "name": "Fox News" },
          "author": "Graham Colton",
          "title": "Ingraham rips 'Cheney Democrats' who don't trust democracy, doing China's work - Fox News",
          "description": "Laura Ingraham exposed the anti-democratic tendencies of the Bush-Cheney bipartisan regime in Thursday's opening monologue of \"The Ingraham Angle.\"",
          "url": "https://www.foxnews.com/media/ingraham-cheney-democrats-democracy-china",
          "urlToImage": "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/9f52ead5-4d00-45cd-9a43-8d5f9b683b81/9b36038f-4cf4-487f-9576-840aec7cc810/1280x720/match/image.jpg",
          "publishedAt": "2022-01-07T05:53:11Z",
          "content": "Laura Ingraham laid into \"Cheney Democrats\" for \"not really trust[ing] democracy\" Thursday on \"The Ingraham Angle.\"\r\nFormer Vice President Dick Cheney visited Congress on Thursday's one-year annivers… [+2512 chars]"
        },
        {
          "source": { "id": null, "name": "ScienceAlert" },
          "author": "Lucie AUBOURG, AFP",
          "title": "Don't Freak Out if a COVID Vaccine Slightly Changes Your Period Cycle, Says Study - ScienceAlert",
          "description": "Women vaccinated against COVID-19 saw a slight delay in their period of almost a day compared to those who were unvaccinated, a US government-funded study said Thursday.",
          "url": "https://www.sciencealert.com/covid-vaccines-can-delay-periods-for-almost-a-day-according-to-a-large-new-study",
          "urlToImage": "https://www.sciencealert.com/images/2022-01/processed/MenstrualCupandTamponsInHands_1024.jpg",
          "publishedAt": "2022-01-07T05:48:25Z",
          "content": "Women vaccinated against COVID-19 saw a slight delay in their period of almost a day compared to those who were unvaccinated, a US government-funded study said Thursday.\r\nBut the number of days of bl… [+2920 chars]"
        },
        {
          "source": { "id": null, "name": "CBS Sports" },
          "author": "",
          "title": "NFL 2021 Playoff Picture: Here are the 14 projected playoff teams with Rams, Bills securing division titles - CBSSports.com",
          "description": "Here are the 14 teams we are projecting to make the playoffs, plus every team's chances of getting in",
          "url": "https://www.cbssports.com/nfl/news/nfl-2021-playoff-picture-here-are-the-14-projected-playoff-teams-with-rams-bills-securing-division-titles/",
          "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/01/05/244ea28d-a899-4e09-a659-322bf19de2fe/thumbnail/1200x675/25d8b88030cc3e7b3ddc1aa3aa088717/mcvaystafford.jpg",
          "publishedAt": "2022-01-07T05:42:00Z",
          "content": "After a wild Week 17, there's not going to be much drama left for the final week of the 2021 NFL season and that's because 11 of the NFL's 14 playoff berths have now been clinched. \r\nActually, there … [+2592 chars]"
        },
        {
          "source": { "id": null, "name": "Hollywood Reporter" },
          "author": "Abid Rahman",
          "title": "Rooney Mara to Star In Apple Studios’ Audrey Hepburn Biopic Directed by Luca Guadagnino - Hollywood Reporter",
          "description": "Rooney Mara is set to star and produce in a biopic of legendary Oscar-winning actress Audrey Hepburn, which will be directed by Call Me By Your Name filmmaker Luca Guadagnino, The Hollywood Reporter has confirmed. The prestige project is set up at Apple Studi…",
          "url": "https://www.hollywoodreporter.com/movies/movie-news/rooney-mara-to-star-in-apple-studios-audrey-hepburn-biopic-directed-by-luca-guadagnino-1235071239/",
          "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2022/01/audrey-rooney.jpeg?w=1024",
          "publishedAt": "2022-01-07T05:01:15Z",
          "content": "Rooney Mara is set to star and produce in a biopic of legendary Oscar-winning actress Audrey Hepburn, which will be directed by Call Me By Your Name filmmaker Luca Guadagnino, The Hollywood Reporter … [+1453 chars]"
        },
        {
          "source": { "id": null, "name": "Stereogum" },
          "author": null,
          "title": "Stream The Weeknd's New Album Dawn FM - Stereogum",
          "description": "The Weeknd has released a new album, Dawn FM, the follow-up to 2020’s blockbuster After Hours. He formally announced it earlier this week, though Abel Tesfaye has been talking it up for a few months now, and it was preceded by the single “Take My Breath.”",
          "url": "https://www.stereogum.com/2172099/the-weeknd-new-album-dawn-fm-stream/music/",
          "urlToImage": "https://static.stereogum.com/uploads/2022/01/the-weeknd-dawn-fm-artwork-1641305754-1000x10001-1641490154.jpeg",
          "publishedAt": "2022-01-07T05:01:00Z",
          "content": "The Weeknd has released a new album, Dawn FM, the follow-up to 2020’s blockbuster After Hours. He formally announced it earlier this week, though Abel Tesfaye has been talking it up for a few months … [+921 chars]"
        },
        {
          "source": { "id": "independent", "name": "Independent" },
          "author": "Graeme Massie",
          "title": "Jan 6 riot news – live: Trump fumes over Biden speech as report says Harris was at DNC when pipe bomb found - The Independent",
          "description": "Jan 6 committee news - latest Capitol Riot updates",
          "url": "https://www.independent.co.uk/news/world/americas/us-politics/january-6-trump-biden-live-capitol-riot-b1988429.html",
          "urlToImage": "https://static.independent.co.uk/2022/01/06/14/2022-01-06T142549Z_1797960329_RC2PTR97UIKN_RTRMADP_3_USA-CAPITOL-SECURITY-1.JPG?width=1200&auto=webp&quality=75",
          "publishedAt": "2022-01-07T04:32:06Z",
          "content": "Joe Biden has given a his much-trailed speech marking the anniversary of the deadly riot at the US Capitol on 6 January 2021 a searing address in which he condemned Donald Trump for watching TV durin… [+8530 chars]"
        },
        {
          "source": { "id": "cnn", "name": "CNN" },
          "author": "Chris Boyette, CNN",
          "title": "New Year's Eve fire at Planned Parenthood facility in Tennessee was arson, officials say - CNN",
          "description": "The fire that destroyed a Planned Parenthood facility in Tennessee on New Year's Eve was intentionally set, the Knoxville Fire Department said Thursday.",
          "url": "https://www.cnn.com/2022/01/06/us/tennessee-fire-planned-parenthood-new-years-eve/index.html",
          "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220106214756-02-knoxville-planned-parenthood-fire-123121-super-tease.jpg",
          "publishedAt": "2022-01-07T04:08:00Z",
          "content": "(CNN)The fire that destroyed a Planned Parenthood facility in Tennessee on New Year's Eve was intentionally set, the Knoxville Fire Department said Thursday.\r\nThe fire took place just after 6:30 a.m.… [+2738 chars]"
        },
        {
          "source": { "id": "politico", "name": "Politico" },
          "author": "Myah Ward",
          "title": "Ted Cruz walks back Jan. 6 'terrorist' remark in heated exchange with Tucker Carlson - POLITICO",
          "description": "The senator brushed off his previous phrasing as “sloppy” and “frankly dumb.”",
          "url": "https://www.politico.com/news/2022/01/06/ted-cruz-jan-6-terrorist-tucker-carlson-526725",
          "urlToImage": "https://static.politico.com/60/b2/87ad26da490588af88064692667e/20220106-ted-cruz-getty-773.jpg",
          "publishedAt": "2022-01-07T03:59:59Z",
          "content": "You told that lie on purpose, and Im wondering why you did, Carlson said. \r\nCruz, a potential 2024 candidate who has argued he is well-positioned for the Republican presidential nomination after fini… [+2185 chars]"
        }
      ];
    constructor(){
        super();
        console.log("Hello I am a constructor")
        this.state={
            articles:this.articles,
            loading:false
        }
    }
    render() {

        return (
            <div className="container my-3">
                <h2>NewsFeed - Top headlines</h2>
               
                <div className="row my-3" >
                {this.state.articles.map((element)=>{
                    return <div className=" col-md-4 my-3 " key={element.url}>
                        <NewsItem  title={element.title.slice(0,16)}  description={element.description} imgUrl ={element.urlToImage} newsUrl={element.url} /></div>
                    })}
                </div>        
            </div>
        )
    }
}

export default News
