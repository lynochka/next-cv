export default function ContactDetails() {
  return (
    <div>
      <div className="text-xl font-medium">Contact Details</div>
      <ul className="mt-2 mb-10 px-2 leading-loose">
        <li>
          <strong>Phone</strong>
          <a href="tel:+4790567742" className="block">
            +47 905 677 42
          </a>
        </li>
        <li>
          <strong>E-mail</strong>
          <a href="mailto:lina.astrakova@gmail.com" class="block">
            lina.astrakova@gmail.com
          </a>
        </li>
        <li>
          <strong>Location</strong>
          <span className="block">Oslo, Norway</span>
        </li>
      </ul>
    </div>
  );
}
