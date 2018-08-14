const program = require('commander')
const exec = require('child_process').exec


function cloneProject(url, path) {
    exec(`git clone ${url} ${path}`,
        function (err, stdout, stderr) {
            if (err) throw err;
            else console.log(stdout);
        });
}
program
    .version('0.0.1')
    .description('Project Creator');

program
    .command('project <githubURL> <newPath>')
    .alias('p')
    .description('Add project')
    .action((githubURL, newPath) => {
        cloneProject(githubURL, newPath);
    });

program.parse(process.argv);