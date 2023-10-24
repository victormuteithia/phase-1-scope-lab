var customerName = 'bob'

function upperCaseCustomerName(){
    return customerName.toUpperCase()
}

function setBestCustomer(){
    bestCustomer = 'not bob'
    console.log(bestCustomer)
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
    console.log(bestCustomer)
}

const leastFavoriteCustomer = 'lisa'

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'mary'
    console.log(leastFavoriteCustomer)
}
