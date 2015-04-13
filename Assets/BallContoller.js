

var speed = 20.0;
function Start () {
	GetComponent.<Rigidbody>().AddForce((transform.forward + transform.right ) * speed,
		ForceMode.VelocityChange );
}

function Update () {

}