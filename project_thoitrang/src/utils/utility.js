export const formatCurrency = (amount) => {
	return new Intl.NumberFormat("vi-VN", {
	  style: "currency",
	  currency: "VND",
	}).format(amount);
  };
  
  export const formatDate = (dateString) => {
	const options = { year: "numeric", month: "long", day: "numeric" };
	return new Date(dateString).toLocaleDateString("vi-VN", options);
  };