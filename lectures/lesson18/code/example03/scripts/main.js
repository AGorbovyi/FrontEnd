async function example() {
    // console.log('I am func example');
    return 0;
}

const example02 = async () => {

}

// console.log(example());
// console.log('main code');
example().then(res => {console.log(res)});

const gitHubFetch = async () => {
    const response = await fetch('https://api.github.com/users/facebook');
    const bodyData = await response.json();
    const responseForRepos = await fetch(bodyData.repos_url);
    const reposOfUser = await responseForRepos.json();
    
    console.log(bodyData);
    console.log(reposOfUser);
    return bodyData.avatar_url;
}

// gitHubFetch();

gitHubFetch().then((data) => {console.log(data + ' === опять')});
console.log('main code');