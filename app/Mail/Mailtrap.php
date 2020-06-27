<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Mailtrap extends Mailable
{
    use Queueable, SerializesModels;
    protected $name, $firstName, $email, $object, $message;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name = '', $firstName = '', $email = '', $object = '', $message = '')
    {
        $this->name = $name;
        $this->firstName = $firstName;
        $this->email = $email;
        $this->object = $object;
        $this->message = $message;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
            ->from($this->email ? $this->email : 'sneakerx@hotmail.fr'  , ($this->firstName && $this->name) ? $this->firstName . '' . $this->name : 'sneaker-x')
            ->subject($this->object ? $this->object : 'confirmation de commande')
            ->view('mailOrder')
            ->with([
                'message' => $this->message ? $this->message : '',
            ]);
    }
}
