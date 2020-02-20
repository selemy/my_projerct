export default {
	bind(el, binding) {
		setBackground (el, binding)
	},
	update(el, binding) {
		setBackground (el, binding)
	}
}
function setBackground (el, binding) {
	if (binding.arg === 'background') {
		el.style.backgroundColor = binding.value
	}
}
