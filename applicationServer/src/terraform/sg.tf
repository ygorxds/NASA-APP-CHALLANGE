resource "aws_security_group" "acesso-ssh" {
  name = "acesso-ssh"
  description = "acesso-ssh"

  ingress  {
    from_port = 22
    to_port = 22
    protocol = "tcp"

    cidr_blocks = ["200.180.173.193/32"]
  }

  tags = {
    "Name" = "ssh"
  }
}