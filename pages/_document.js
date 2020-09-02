import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		// console.log(initialProps);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<link rel="icon" href="/images/favicon.ico" />
					<link
						href="/css/bootstrap_4.5.0_css_bootstrap.min.css"
						rel="stylesheet"
					/>
					<link
						rel="stylesheet"
						href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
						integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
						crossOrigin="anonymous"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
						rel="stylesheet"
					/>
					<link href="/css/footer-style.css" rel="stylesheet" />
					<link href="/css/owl.carousel.min.css" rel="stylesheet" />
					<link href="/css/styles.css?v=1.1" rel="stylesheet" />
					<script
						type="text/javascript"
						src="/js/jquery-3.5.1.slim.min.js"
					></script>
					<script
						src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
						integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
						crossOrigin="anonymous"
					></script>
					<script
						src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
						integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
						crossOrigin="anonymous"
					></script>
					<script type="text/javascript" src="/js/owl.carousel.js"></script>
					<script type="text/javascript" src="/js/custom.js"></script>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
