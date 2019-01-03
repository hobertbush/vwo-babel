// alert('asdf')
const script = `
<script type='text/babel'>
const message = () => 'Hello World';
document.getElementsByTagName('body')[0].innerHTML(message())
</script>
` 
$('head').append(script)