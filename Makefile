build_docker:
	docker build . -t darkside-gallery-next

run_docker:
	docker run -p 3000:3000 darkside-gallery-next
