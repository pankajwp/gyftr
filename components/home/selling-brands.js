import Link from "next/link";

const SellingBrands = () => {
	return (
		<section className="row py-3 py-md-4">
			<div className="col-12 p-0">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h3 className="h4 fw-700 text-uppercase">best selling brands</h3>
						</div>

						<div className="col-12 px-4">
							<div className="row destSealingGread">
								<div className="col-6 col-md-4 col-lg-2 p-2 text-center">
									<div className="border">
										<figure className="m-0">
											<img src="/images/logos/1.png" />
											<figcaption className="m-0 mt-3 p-3 border-top">
												<div className="offDiv">Upto 5% off</div>
												<div>
													<Link href="/brand">
														<a className="btn btn-danger fs-14 rounded-0">
															SHOP NOW
														</a>
													</Link>
												</div>
											</figcaption>
										</figure>
									</div>
								</div>

								<div className="col-6 col-md-4 col-lg-2 p-2 text-center">
									<div className="border">
										<figure className="m-0">
											<img src="/images/logos/2.png" />
											<figcaption className="m-0 mt-3 p-3 border-top">
												<div className="offDiv">Upto 5% off</div>
												<div>
													<Link href="/brand">
														<a className="btn btn-danger fs-14 rounded-0">
															SHOP NOW
														</a>
													</Link>
												</div>
											</figcaption>
										</figure>
									</div>
								</div>

								<div className="col-6 col-md-4 col-lg-2 p-2 text-center">
									<div className="border">
										<figure className="m-0">
											<img src="/images/logos/3.png" />
											<figcaption className="m-0 mt-3 p-3 border-top">
												<div className="offDiv">Upto 5% off</div>
												<div>
													<Link href="/brand">
														<a className="btn btn-danger fs-14 rounded-0">
															SHOP NOW
														</a>
													</Link>
												</div>
											</figcaption>
										</figure>
									</div>
								</div>

								<div className="col-6 col-md-4 col-lg-2 p-2 text-center">
									<div className="border">
										<figure className="m-0">
											<img src="/images/logos/4.png" />
											<figcaption className="m-0 mt-3 p-3 border-top">
												<div className="offDiv">Upto 5% off</div>
												<div>
													<Link href="/brand">
														<a className="btn btn-danger fs-14 rounded-0">
															SHOP NOW
														</a>
													</Link>
												</div>
											</figcaption>
										</figure>
									</div>
								</div>

								<div className="col-6 col-md-4 col-lg-2 p-2 text-center">
									<div className="border">
										<figure className="m-0">
											<img src="/images/logos/5.png" />
											<figcaption className="m-0 mt-3 p-3 border-top">
												<div className="offDiv">Upto 5% off</div>
												<div>
													<Link href="/brand">
														<a className="btn btn-danger fs-14 rounded-0">
															SHOP NOW
														</a>
													</Link>
												</div>
											</figcaption>
										</figure>
									</div>
								</div>

								<div className="col-6 col-md-4 col-lg-2 p-2 text-center">
									<div className="border">
										<figure className="m-0">
											<img src="/images/logos/6.png" />
											<figcaption className="m-0 mt-3 p-3 border-top">
												<div className="offDiv">Upto 5% off</div>
												<div>
													<Link href="/brand">
														<a className="btn btn-danger fs-14 rounded-0">
															SHOP NOW
														</a>
													</Link>
												</div>
											</figcaption>
										</figure>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SellingBrands;
