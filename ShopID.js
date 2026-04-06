async function getShopId() {
    const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6IjVhMmY0NjQ1OWY5MTEzMzdhNTA3MjEwYzRlMzhiNWJlZWY0YzYyNzA1NmZkYTM1MDJkMzMyM2E2YmU5OWNiYTQwMWM5NzhkNzY0YTJhZGJkIiwiaWF0IjoxNzcwODQ3NjYyLjY3NjM2MywibmJmIjoxNzcwODQ3NjYyLjY3NjM2NSwiZXhwIjoxODAyMzgzNjYyLjY2NTMyNiwic3ViIjoiMjYzNDg1MjUiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIiwidXNlci5pbmZvIl19.pZPrj9bd6bRP4LtyaLCttWZlPNBvPztBuRi7TnFVdfbbvrkDzlF1blObsSbY_Er3KHWmkVHLf5G8hPgo2gJmWdQPxiiLXyHN9acWKVIDLvqzkW3D-40_aDBkJfFq-j-DRRawdC_KfimdvGwjHT0lTXdqVEdtNLk8g5Sz-25w7x8eDdOOa0aWoMdWo2hSdn-vcruk9pGzKoSE0fG_uDmiDqJr7iCvV_y6PrnHFvPhxiKGuTLgW-4UmYqq8KoOYOHxGXewc3YGi5ysREpK13XjHIAYsyF1JGbEbSM1RdovIwxsdJKwi0lpKiqfn6d0AvwbyU7T3Rqrlp-6d4FyeZmiLWW18JZNffAmo2TMtdkm0V3MBqLYy2RP89vs6PGFuPjtcHvqRZyVa7_lmKGOCSfufp6Qb-p0Cg3y0YpeajkA4o49b3tg5C-nkPt-V2wJcKAnlenzKb7D_RGSYd5wNL0JIs8OHbEGEDnwpZVcbfyeBI95ssHilBSgeCuz4qFCLjMaFePPozI9BJoSe_6LsynBCQsl-Loqrad5CcY92WWfSTS_Zk6W6whaM-sEaQC-gDnS6vmnwwUWBp3ypYhdA4cy4H2j5qiuqUc66MvWU88-LXRipb6aoliwHRnUWyju5potQwqi4GsyqKwNuqMEmQKAZyz42zZd5wKH0oT0kgB8U8M"

    const url = 'https://api.printify.com/v1/shops.json';
    try {
        const response = await fetch(url, 
        {
            method : 'GET',
            headers: {
                'Authorization' : `Bearer $ {accessToken} `,
            'Content-Type'   : 'application/json' ,
            }
        }
        );
         if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const shops = await response.json();
    console.log('Your shops:', shops);

    if (shops.length > 0) {
      const shopId = shops[0].id;
      console.log('Shop ID:', shopId);
      return shopId;
    } else {
      console.log('No shops found.');
      return null;
    }
  } catch (error) {
    console.error('Error fetching shops:', error);
  }
}
getShopId();