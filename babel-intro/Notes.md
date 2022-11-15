# Understanding NPM - Node.js Package Manager

## Section 1 - Introduction

1. Install Node.js for your operating system. [NODE.JS LINK](https://node.js.org)
2. Install Visual Studio Code Editor. (other editor would be OK too) [VSC LINK](https://code.visualstudio.com/)
3. Create project folder on your computer with any desirable title. In my case title of hte initial project folder is "```babel-intro```".
4. Inside of the project folder create "```src```" subfolder and add empty "```index.js```" file to it.

And your are good to go!
Happy Learning!

---

## Section 2 - Introduction to the NPM

1. Explore NPM packages on NPM Site. [NPM LINK](https://www.npmjs.com)
2. Package.json and init

To create public package or work with different people one the same project you need to create ```package.json``` file on the root of your project.

You can create it manually or with ```npm```.

Command :

```powershell
npm init
```

Initialize project and create ```package.json```
This will create following outputs in the terminal:

```powershell
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (babel-intro)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author: Mihai
license: (ISC)
About to write to C:\Users\Mihai\Documents\dev\Udemy\babel-intro\package.json:

{
  "name": "babel-intro",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Mihai",
  "license": "ISC"
}


Is this OK? (yes)
```

---
Each Pubic Package muss have unique name and version
Semantic Versioning
Universal agreement for software versioning

[See more here](https://semver.org)

---

### Version consist of tree parts

5.21.17

Major.Minor.Patch

For  Bug fixes, change Patch Version.

For new features and package remains compatible with previous version, change Minor Version

For non-compatible features or change project completely, change Major Version

If your package dependes on other packages, then specifiy with version of external package you need.

<table>
  <tr>
    <td>Exact version</td>
    <td>5.21.17</td>
  </tr>

  <tr>
    <td>Greater than</td>
    <td>>5.21.1</td>
  </tr>

  <tr>
    <td>Compatible changes</td>
    <td>^5.<span style="color:orange">21</span>.<span style="color:orange">8</span></td>
  </tr>

  <tr>
    <td>Minor-level changes</td>
    <td>~5.21.<span style="color:orange">8</span></td>
  </tr>
</table>

---

### Pre-release versions

1.0.0-alpha <
1.0.0-alpha.1 <
1.0.0-beta <
1.0.0-beta.2 <
1.0.0-beta.11 <
1.0.0.-rc.1 (rc => release candidate) <
1.0.0

---

## Section 3: Installation of the NPM packages

### Packages Installation

```npm install``` or ```npm i``` install packages that are listed in ```package.json``` file.

If ```package.json```file is absent, no packages will be install.

If ```package.json``` file exists and has listed dependencies, then they will be install in the ```node_modules``` folder.

```npm install <package>``` install specific Package as dependencie.

```npm install <package> --save-dev``` install specific Package as dev-dependencie.

---

### Install Package in the Project

```pws
$ npm install moment

added 1 package, and audited 2 packages in 3s

found 0 vulnerabilities
```

```package-lock.json``` file was added if not already present.

Moment was the only package installed. That means Moment has no dependencies.

But it has devDependencies.

---

### Install Semver package (Challenge)

Run ```npm install semver``` to install package.

```bash
$ npm install semver

added 3 packages, and audited 5 packages in 1s

found 0 vulnerabilities
```

Observe the changes.

Semver package is very convenient for Semantic Versioning.

---

### Install Browserlist

```bash
$ npm install browserslist
added 7 packages, and audited 12 packages in 4s

3 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

If a package has own dependencies, they will be install togheter with the package.

Your project's ```package.json``` will not be added this packages to dependencies.

In ```package-lock.json``` you see all dependecies.

---

## Section 4: Dependencies vs Development Dependencies

### Dependencies and Development Dependencies

- Dependencies
  - Installed using ```npm install``` or ```npm install <package>```.
  - If package A is installed using ```npm install <packageA>``` and it has dependency on package B than package B will be also install along with it's dependencies.

Installation of dependencies is Transitive.

- Development Dependencies
  - Install using ```npm install```.
  - Not installed using ```npm install --production```.
  - If package A is installed using ```npm install <packageA>``` and it has devDependency on package B than package B will NOT be installed.

Intallation of development dependencies is not Transitive.

---

### Examine Development Dependencies

Remove ```browserslist``` package as a dependency.

```bash
$ npm uninstall browserslist

removed 7 packages, and audited 5 packages in 1s

found 0 vulnerabilities
```

Observ changes.

Add ```browserslist``` package as a development dependency.

```bash
npm install --save-dev browserslist

added 7 packages, and audited 12 packages in 3s

3 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

Observe changes.

it does not matter if you add development dependency or dependency, dependencies of package will be installed.

Delete ```node_module``` folder.

Now install packages.

```bash
 npm install

added 11 packages, and audited 12 packages in 3s

3 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

Observe changes.

```node_modules```folder does not be commited to source controls.

Delete ```node_module``` folder again.

Now use ```npm install --production``` to install dependencies.

```bash
$ npm install --production

added 4 packages, and audited 5 packages in 2s

found 0 vulnerabilities
```

Observe changes.

Add packages as dependency or dev dependency?

---

### Browser App vs Server Package

Are you building browser app or server package?

Our project contains JavaScript files.

Create ```index.html``` file in root project folder and load ```src/index.js``` to it.

Browser does not understand ```CommonJS Moduls``` but Node.js does.

If you need Browser to understande Modules, you need to use Bundles, like webpack.

---

### Clock Browser Application (challenge)

- Create new package ```clock```.
- Initialize it and install ```moment``` dependency.
- Create ```index.html```, ```src/style.css```, ```src/index.js```.
- Place formatted time in the ```<h1></h1>```.
- Update clock each second.

---

### Clock Browser Application (solution)

```npm install -y``` will answer yes to all promted questions.

```start <filename>``` will execute file in Windows CLI.

---

### Clock Browser Application (summary)

Dependencies and dev dependencies have Zero realtion to the browser app.

---

### Browser app vs Public Package

For Browser app it does not matter if you install packages as dependencies or dev dependencies.

You can add all your dependencies as a dev dependencies or you can add  all as dependencies. It does not matter for standalone applications.

Add dependencies only if:

1. Your package is public.
2. Compiled version of your package use features from dependent packages.
3. Other packages depend on your package.

Most packages in the world are used on the server only during development of other packages.

---

## Section 5: NPM packages versions and package-lock.json file

### Exploring Package Information

```npm view <package>``` outputs information about package.

```bash
$ npm view moment

moment@2.29.4 | MIT | deps: none | versions: 74
Parse, validate, manipulate, and display dates
https://momentjs.com

keywords: moment, date, time, parse, format, validate, i18n, l10n, ender

dist
.tarball: https://registry.npmjs.org/moment/-/moment-2.29.4.tgz
.shasum: 3dbe052889fe7c1b2ed966fcb3a77328964ef108
.integrity: sha512-5LC9SOxjSc2HF6vO2CyuTDNivEdoz2IvyJJGj6X8DJ0eFyfszE0QiEd+iXmBvUP3WHxSjFH/vIsA0EN00cgr8w==
.unpackedSize: 4.2 MB

maintainers:
- ichernev <iskren.chernev@gmail.com>
- timrwood <washwithcare@gmail.com>
- mj1856 <mj1856@hotmail.com>
- maggiepint <maggiepint@gmail.com>
- marwahaha <marwahaha@berkeley.edu>

dist-tags:
latest: 2.29.4

published 3 months ago by ichernev <iskren.chernev@gmail.com>
```

```npm view <package> versions``` outputs list of package versions.

```bash
$  npm view moment versions
[
  '1.0.0',  '1.0.1',  '1.1.0',  '1.1.1',  '1.2.0',
  '1.3.0',  '1.4.0',  '1.5.0',  '1.5.1',  '1.6.0',
  '1.6.1',  '1.6.2',  '1.7.0',  '1.7.1',  '1.7.2',
  '2.0.0',  '2.1.0',  '2.2.1',  '2.3.0',  '2.3.1',
  '2.4.0',  '2.5.0',  '2.5.1',  '2.6.0',  '2.7.0',
  '2.8.1',  '2.8.2',  '2.8.3',  '2.8.4',  '2.9.0',
  '2.10.2', '2.10.3', '2.10.5', '2.10.6', '2.11.0',
  '2.11.1', '2.11.2', '2.12.0', '2.13.0', '2.14.0',
  '2.14.1', '2.15.0', '2.15.1', '2.15.2', '2.16.0',
  '2.17.0', '2.17.1', '2.18.0', '2.18.1', '2.19.0',
  '2.19.1', '2.19.2', '2.19.3', '2.19.4', '2.20.0',
  '2.20.1', '2.21.0', '2.22.0', '2.22.1', '2.22.2',
  '2.23.0', '2.24.0', '2.25.0', '2.25.1', '2.25.2',
  '2.25.3', '2.26.0', '2.27.0', '2.28.0', '2.29.0',
  '2.29.1', '2.29.2', '2.29.3', '2.29.4'
]
```

---

### Installing specific package version

```npm install <package>``` will install current stable release.

```npm install <package@version>``` this install specific version.

```bash
$ npm install moment@2.14.0
changed 1 package, and audited 2 packages in 2m

1 high severity vulnerability

To address all issues, run:
  npm audit fix --force

Run `npm audit` for details.
```

Observe changes.

```bash
$ npm audit
# npm audit report

moment  <=2.29.1
Severity: high
Regular Expression Denial of Service in moment - https://github.com/advisories/GHSA-446m-mv8f-q348
Path Traversal: 'dir/../../filename' in moment.locale - https://github.com/advisories/GHSA-8hfj-j24r-96c4
fix available via `npm audit fix`
node_modules/moment

1 high severity vulnerability

To address all issues, run:
  npm audit fix
```

Observer output.

---

### Why package.lock.json file is needed?

Keeps versions tree of the project dependencies including child dependencies.

Keeps colaboration project on same version of dependencies.

---

### Reinstall old package version without lock file (challenge)

1. Create new project and perform ```npm init```.
2. Install exact version of any package. Version must be older than latest version.
3. Remove ```node_modules``` and ```package-lock.json```.
4. Perform ```npm install```and look at the version of the  package that was reinstalled.

---

### Reinstall old package version without lock file (solution)

After challenge complete, ```npm install``` without ```package-lock.json```, latest stable version of packages was installed.

### How package-lock.file is handled

Lock file creation:

- Generated automatically starting from NPM v5.0.0.
- Updated automatically.

How Lock file is handled:

- Should be committed to source control.
- ```node_modules```should not be committed.
- Lock file is not published to NPM software registry.

1. Create new project folder.
2. Run ```npm init```.
3. Install mocha package lastest version as development Dependencie, ```npm install mocha -D```.
4. Observe fiels ```package.json``` and ```package-lock.json```.

Because installing mocha as Development Dependencie, all its Dependencies are installed as Development Dependencies into the project They have ```dev:true``` flag in ```package-lock.json```file.
5. Install semver as Dependencie, ```npm install semver```.
6. Observe fiels ```package.json``` and ```package-lock.json```.
7. Install borwserslist as Dependencie, ```npm install semver```.
8. Observe fiels ```package.json``` and ```package-lock.json```.

Because installing semver and browserslist as Dependency, all there Dependencies are installed as Dependency into the project. They have no ```dev:true``` flag in ```package-lock.json```file.
9. Observer ```node_modules``` folder size.

```pws
$ cd node_modules
"{0:N2}" -f ((Get-ChildItem -path ./ -recurse | Measure-Object -property length -sum ).sum /1MB) + " MB"

6.98 MB
```

That is why, never commit ```node_modules``` folder to source control.
10. Delete ```nodes_modules```folder and reinstall all dependencies.

```pws
cd ../
Remove-Item './node_modules' -Recurse
npm install
```

Packages are install with the same version as listet in the ```package-lock.json``` file.

Without ```package-lock.json``` file, ```npm install``` will, if there are updates in the dependencies, install latest version of packages.

---

### Lock file summary

- Guarantees consistency of the dependencies versions.
- Generated and updated automatically.
- Committed to source control.

---

## Section 6: Updating NPM Packages

### Update NPM Packages overview

```npm update```, updates all listed packages to the latest release version within Semantic Versioning.

```^1.2.5 -> ^1.3.0```

```npm update <package>```, updates specific package to the latest rellease version within SemVer.

---

### Update package dependencies (challenge)

1. Create new project and perform ```npm init```.
2. Install exact version of any package.
Version must be older than latest version.
Use ```--save-exact``` npm option.
```npm install lodash@4.17.5 --save-exact```
3. Install specific version of other package.
Version must be older than latest version.
```npm install axios@1.0.0```
4. Perform ```npm update``` and analyze result.

Exact version package was not updated.

Not-exact version package was updated.

---

## Section 7: NPM Scripts

### Introduction to NPM Scripts

Each npm Script has its own name. They are defined inside ```package.json``` file in the ```"scripts"``` section.

```npm <script-name>``` will execute Script.

```bash
$ npm test
> npm-scripts@1.0.0 test
> echo "Error: no test specified" && exit 1

"Error: no test specified"
```

After ```npm init``` there will be a default ```test``` script created.

---

### Start NPM Script

NPM SCRIPTS:

- ```npm start``` by default executes ```server.js```.

```bash
$ npm start
npm ERR! Missing script: "start"
npm ERR!
npm ERR! Did you mean one of these?
npm ERR!     npm star # Mark your favorite packages
npm ERR!     npm stars # View packages marked as favorites
npm ERR!
npm ERR! To see a list of scripts, run:
npm ERR!   npm run

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\<user-name>\AppData\Local\npm-cache\_logs\2022-11-03T18_33_35_443Z-debug-0.log
```

- Create ```server.js``` file and run ```npm start```again.

```bash
$ npm start

> npm-scripts@1.0.0 start
> node server.js
```

- Add ```start``` Script to ```package.json```.

```json
{
  "scripts":{
    "start": "node ./server.js",
  }
}
```

Works the same.

Other Built-in commands for scripts:

- ```npm start```
- ```npm stop```
- ```npm restart```
- ```npm test```
- ```npm prestart```
- ```npm poststart```

---

### Create prestart script

1. Install ```colors``` NPM as dev package.
```npm install colors```
2. Create file ```src/prestart.js``` and require ```colors``` package.

  ```bash
  mkdir src
  New-Item ./src/prestart.js -type file
  ```

  ```js
  const colors = require("colors");
  ```

3. Add ```green-colored``` ```console.log``` message ```Application is starting...```.

```js
console.log(colors.green("Application is starting..."));
```

4. Create ```prestart``` script and execute created file ```src/prestart.js```.

```json
{
  "scripts":
  {
    "prestart" : "node ./src/prestart.js",
  }
}
```

```bash
$ npm start

> npm-scripts@1.0.0 prestart
> node ./src/prestart.js

Application is starting...

> npm-scripts@1.0.0 start
> node ./server.js

Start script.
```

---

### Create prestart script(solution)

In ```package.json``` the ```main``` Section holds the path to the script that will be called when a module is required.

---

### Custom NPM scripts

```npm run <script>``` executes certain script.

Alias of ```npm run-script <script>```.

Create ```custom``` script command to run ```echo \"That's custom script\""```.

Create ```custom-script``` script command to run ```node ./src/customScript.js``` file.

---

### Run NPM scripts simultaneously (challenge)

Run several scripts

```json
{
  "scripts": {
    "custom1" : "node ./src/script1.js",
    "custom2" : "node ./src/script2.js",
    "all": "npm-run-all --parallel custom1 custom2"
  }
}
```

1. Install ```npm-run-all``` NPM as dev package.
2. Add ```all``` NPM script to the ```package.json``` that will execute ```start```, ```custom1```, ```custom2``` script. Use ```--parallel``` flag.

```bash
$ npm run all

> npm-scripts@1.0.0 all
> npm-run-all --parallel start custom custom-script


> npm-scripts@1.0.0 custom
> echo "That's custom script"


> npm-scripts@1.0.0 prestart
> node ./src/prestart.js

"That's custom script"

> npm-scripts@1.0.0 custom-script
> node ./src/customScript.js

Application is starting...
That's another custom script

> npm-scripts@1.0.0 start
> node ./src/server.js

Start script.
```

---

## Section 8: Executable scripts in the NPM

### NPM .bin Folder with Executable Scripts

Executables in the .bin Folder.

- During NPM package installation bin scripts are copied to the ```.bin``` folder.

```json
{
  "bin": "bin/run-p/index.js",
  "run-s": "bin/run-s/index.js",
  "npm-run-all": "bin/npm-run-all/index.js"
}
```

The Shebang line ```#!/usr/bin/env node``` determines which interpreter should be used for file execution on the Unix-like Operation Systems.

This line should be the first line in the executable plain text files.
