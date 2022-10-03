resource "aws_instance" "dev" {
  count         = 3
  ami           = "ami-08c40ec9ead489470"
  instance_type = "t2.micro"
  key_name      = "kruger-key"
  tags = {
    "Name" = "dev${count.index}"
  }
}