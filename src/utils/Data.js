import { images } from "../assets/images";
// {
//   let coinsList = coins;
//   let newCoinsList = coins.filter(coin => {
//     let coinName = coin.name.toLowerCase();
//     let coinSymbol = coin.symbol.toLowerCase();
//     let searchTerm = txt.toLowerCase();
//     if (
//       coinName.includes(searchTerm) ||
//       coinSymbol.includes(searchTerm)
//     ) {
//       console.log("coinName==>",searchTerm,coinName,coinSymbol);
//       return coin;
//     }
//   });

//   if (newCoinsList.length <= 0) {
//     setCoins(coinsList);
//   } else {
//     setCoins(newCoinsList);
//   }
//   // setting searchTerm
//   setState({...state, searchText: txt});
// }

export  const OnBoardingData = [
    {
      id: 0,
      title: 'SECURITY',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industr Lorem Ipsum sim text.',
      img: images.SecurityImage,
    },
    {
      id: 1,
      title: 'SYSTEM',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industr Lorem Ipsum sim text.',
      img: images.SystemImage,
    },
    {
      id: 2,
      title: 'PERSPECTIVE',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industr Lorem Ipsum sim text.',
      img: images.PerspectiveImage,
    },
  ];

  export const DashBoardGraphData = [
    {
      key: 1,
      value: 50,
      svg: { fill: 'rgb(247,147,26)' }
    },
    {
      key: 2,
      value: 50,
      svg: { fill: 'rgb(85,255,208)' }
    },
    {
      key: 3,
      value: 50,
      svg: { fill: 'rgb(84,188,255)' }
    }
  ];

  export const PortfolioCoinData = [
    {
      name: 'USDT',
      percentage: '72.61%',
      image: images.UsdtIcon
    },
    {
      name: 'DASH',
      percentage: '13.27%',
      image: images.DashIcon
    },
    {
      name: 'BTC',
      percentage: '1.8%',
      image: images.BtcIcon
    }
  ];

  export const PortFolioModalData = [
    {
      name: 'Portfolio Value'
    },
    {
      name: 'Name'
    },
    {
      name: '24H Volume'
    },
    {
      name: 'Market Cap'
    },
    {
      name: '24H Change'
    }
  ];

  export const BitCoinGraphData = [
    55,
    50,
    60,
    70,
    90,
    80,
    65,
    25,
    30,
    5,
    40,
    30,
    47,
    70,
    55,
    99,
    55,
    65,
    40,
    45,
    45
  ];
  export const xdata = ['24H', '7D', '1M', '3M', '6M', '1Y'];