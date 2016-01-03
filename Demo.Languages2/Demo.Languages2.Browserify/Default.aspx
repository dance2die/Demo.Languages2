<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Demo.Languages2.Browserify.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
	<title></title>
</head>
<body>
	<form id="form1" runat="server">
		<div>
			<button id="newButton">New</button>
			<button id="deleteButton">Delete</button>
			<button id="saveButton">Save</button>
			<button id="cancelButton">Cancel</button>
		</div>
	</form>
	
	<script src="js/app.bundle.js"></script>
</body>
</html>
