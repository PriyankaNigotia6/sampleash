Angular Study
>Wtis : js framework for reactive SPA
>Angular vs angular.js
>Ide:Webstorm
>Typescript: classes, interfaces, types etc
>String interpolation: any typescript code evaluates to string is valid
>Directive are instruction for angular for the DOM & typically use as attribute components are directive with template
>*ngIf is a structural directive because of * is there which means it is created or not created based on condition
>attribute directives unlike structural directive example ngstyles which accepts key value pair of styles on which we can bind properties & is for css property
>ngclass also take key value pair but key is is name of class & value is condition on which decision has taken that class will shown or not  & is for css class
>*ngFor structural because of * and it is used to loop for element used & used by creating local variable in template using let

>source maps are the files used to map compiled js files to map with ts files while in development mode of course not in production mode
>
>
>
>
>
>Directives are of two types attribute vs structural
>
>
>
>services are the classes which are accessible from every where in project

Task
========Miscellaneous========

========project setup========
	◦	Install webstorm/paid
	✓	Project setup
	✓	Ngmodel
	✓	Bootstrap css
	✓	Root component trace
	✓	Component selector trace
========component=========
	✓	Create component manually Through command
	✓	Create through cli : never use component in name as it is automatically added by cli
	✓	Generate sub component in sub folder by mentioning existing component folder name with sub component name
	✓	Use components
	✓	Inline template vs template url
	✓	Add Styles using stylesUrls array
	✓	Use selector as elements, attributes & class
========data binding=========
	✓	Data Binding:
	✓	String interpolation
	✓	Property binding
	✓	Es 6 arrow function
	✓	Event binding
	✓	2 way data binding
	✓	Combining all bindings
	✓	Ngif & else
	✓	Ng-templates with local reference also used for else
	✓	Ngstyles
	✓	Ngfor
=======Debugging=========
	✓	Breakpoints by DC>Sources>Webpack>.>src
	✓	Sourcemaps concept
	✓	Augury
==Advance Components==DB====
	✓	Component communication
	✓	components:custom property binding
	✓	@input()
	✓	Property alias
	✓	@output
	✓	View Encapsulation using shadow dom but as all browser dont implement it that’s why angular emulates it
	✓	Configuring view Encapsulation
	✓	Local references in template to get html element & pass it to the method from template as it is accessible to complete template
	✓	Access Local references through @ viewchild decorator to get native html element
	✓	Ngcontent directive to projected complete html
	◦	Lifecycle implements all  events & check there availability: check it later
=======Directives===========
	✓	Create attribute directive using element ref & renderer
	✓	Handle events on the directive using hostlistener
	✓	Using hostbinding although using renderer is not wrong
	✓	Host element Event binding on custom directive using @Hostlistner
	✓	Host element Event binding on custom directive using @Hostbinding
	✓	Custom property Binding using @Input
	✓	Check structural directives behind the scenes using @Hostlistner
	✓	Create structural directives with setter
	✓	Ngswitch practice 
==========Services=========
	✓	 Creative services which is simply a class
	✓	Create service object using new
	✓	Creare service instance using angular dependency injection by using providers indiviually [Different instances]
	✓	Creare service instance using angular dependency injection by using providers indiviually [Same instances]
	✓	Dependency hierarchy level app.module is the highest one and prove service instance to complete application
	✓	Service in a service using @ injectable
	✓	Cross component event based communication using services through evenemmiter
==========Routes=========
	✓	Create and setting up routes using Routes class
	✓	Load router to angular using RoutesModules.root()
	✓	Display them to page using router-outlet directive as then angular load currently selected route to the view
	✓	Navigate through href links will make the new request to the server which is not required
	✓	Nagivate through angular routerlinks as property binding which accepts a array
	✓	Understand / for relative path & absolute path. Without / the url is relative path
	✓	Use routerlinkactive to visually show current active route which accepts class & we can also configure routerlinkactiveoptions to configure it
	✓	Route to pages programatticaly  using router navigate method
	✓	Navigate method doesn’t know about current route to let it be aware use activatedroute to get current route
	✓	Add dynamic path segment to routes & access it by using activated route object with snapshot, params observable dynamically 
	✓	If we are at same component then angular doesn’t load route with other parameter as for the performance issues. So to resolve it we must use activatedroute params observable to get the values asyncronysly us
	✓	We can unsubscribe to params on ondestroy licfecycle hooks using subscription from rxjs package
	✓	Pass by using bind qweryparams by passing object of key value parameters & fragments passing string. We can do the same programitically
	✓	Access query params from url using activated route snapshot or queryparams & fragments observable
	✓	Add + symbol to make string to number
	✓	Child Routes creation adding children property array of children routes
	✓	Create relative child route while using navigate method using relativeto property & pass current route using this.route
	◦	While changing between routes we loose route url information to retain that use qweryparamshandling property while navigating to other url
	◦	Setting up routes with redirect to another route not component using redirectto property & by using ** we mention all routes
	◦	Create approute module & load routes module from this modules & configure exports of routes modules then load it in app.module
	◦	Create auth route guard using canactivate interface 
	◦	Create fake login using promise & apply created canactivate to routes we want or use canactivatechild to apply them only to child routes
	◦	Using fake login service to gin & logout
	◦	Prevent user to accidentally or intentionally when leaving a route navigating before changes are saved candeactivate interface in service can be created
	◦	Pass static & dynamic data using data properties of router using resolvers
	◦	Configure angular to have hash based url on forRoot method using useHash property
=======Observables==========
	◦	Create & subscribe observable using interval imported from rxjs/RS
	◦	Create observable using create method with all handlers success, error, complete
	◦	Create subject which are observable & observer at same time
	◦	Create operator with map although there are lots of operator which accept data from observable and return another observable

============Pipes==========

============HTTP==========

========Authentication=======

====Modules optimization======

==========Deploying========

=========Universal==========

=========Animations=========

==========Testing==========

=======HTTP Advance========

==========Typescript========

===========Forms==========
