const google = require('googlethis');

async function testSearch() {
  const options = {
    page: 0,
    safe: false,
    additional_params: {
      hl: 'en'
    }
  };
  const response = await google.search('daiDokoro Stainless Steel 4 Insulated Container Lunch Box Set price', options);
  console.log(JSON.stringify(response.organic, null, 2));
}

testSearch();
