<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Demo.Languages2.MixingAngularTypeScriptRequireJS.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" ng-app="app">
<head runat="server">
	<title></title>
	
	<link href="Content/bootstrap.min.css" rel="stylesheet" />
	<link href="Content/toastr.css" rel="stylesheet" />
</head>
<body ng-controller="mainCtrl">
	<form id="form1" runat="server">
		<div>
		</div>
	</form>
	
	<div id="result" ng-model="result"></div>
	
	<script src="Scripts/require.js" data-main="js/main.js"></script>
</body>
</html>
